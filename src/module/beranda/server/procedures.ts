
import { db } from "@/db";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { serviceTitle, serviceTitleUpdateSchema } from "@/db/schema";
import { TRPCError } from "@trpc/server";

export const berandaRouter = createTRPCRouter({
  editTitle: protectedProcedure
    .input(serviceTitleUpdateSchema)
    .mutation(async ({ input, ctx }) => {

      const [data] = await db
        .update(serviceTitle)
        .set({
          title: input.title,
          description: input.description,
          href: input.href,
          image: input.image,
        })
        .returning();

      if (!data) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Gagal mengedit data' });
      }

      return data;
    }),
  getTitle: baseProcedure  // Changed from gatTitle to getTitle
    .query(async () => {
      const [data] = await db
        .select({
          title: serviceTitle.title,
          description: serviceTitle.description,
          href: serviceTitle.href,
          image: serviceTitle.image,
        })
        .from(serviceTitle)
        .limit(1)

      return data;
    }),
})