import { db } from "@/db";
import { crousels, serviceTitle } from "@/db/schema";
import { isAdmin } from "@/module/admin/lib/admin";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError, UTApi } from "uploadthing/server";
import { z } from "zod";

const f = createUploadthing();

export const ourFileRouter = {
  titleUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const { userId: clerkUserId } = await auth();
      const user = isAdmin(clerkUserId || "");

      if (!clerkUserId) throw new UploadThingError("Unauthorized");

      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: clerkUserId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db
        .update(serviceTitle)
        .set({
          imageUrl: file.ufsUrl,
          imageKey: file.key,
        });
      return { uploadedBy: metadata.userId };
    }),
  crouselUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(z.object({
      crouselId: z.string().uuid(),
    }))
    .middleware(async ({ input }) => {
      const { userId: clerkUserId } = await auth();

      if (!clerkUserId) throw new UploadThingError("Unauthorized");

      const [existingCrousel] = await db
        .select({
          imageKey: crousels.imageKey,
        })
        .from(crousels)
        .where(and(
          eq(crousels.id, input.crouselId),
        ));

      if (!existingCrousel) throw new UploadThingError("Not found");

      if (existingCrousel.imageKey) {
        const utapi = new UTApi();

        await utapi.deleteFiles(existingCrousel.imageKey);
        await db
          .update(crousels)
          .set({
            imageUrl: null,
            imageKey: null,
            updatedAt: new Date(),
          })
          .where(and(
            eq(crousels.id, input.crouselId),
          ));
      }

      return { clerkUserId, ...input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db
        .update(crousels)
        .set({
          imageUrl: file.ufsUrl,
          imageKey: file.key,
        })
        .where(and(
          eq(crousels.id, metadata.crouselId),

        ));
      return { uploadedBy: metadata.clerkUserId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
