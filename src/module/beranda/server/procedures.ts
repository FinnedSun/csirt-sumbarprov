
import { db } from "@/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import z from "zod";
import { serviceTitle } from "@/db/schema";

export const berandaRouter = createTRPCRouter({
  gatTitle: baseProcedure
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