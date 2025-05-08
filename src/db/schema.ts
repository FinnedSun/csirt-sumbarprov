import { pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema
} from "drizzle-zod";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerk_id").unique().notNull(),
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]);

export const serviceTitle = pgTable("service_title", {
  title: text("title").primaryKey().unique(),
  description: text("description").notNull(),
  href: text("href").notNull(),
  imageUrl: text("image"),
  imageKey: text("image_key"),
});

export const serviceTitleInsertSchema = createInsertSchema(serviceTitle)
export const serviceTitleSelectSchema = createSelectSchema(serviceTitle)
export const serviceTitleUpdateSchema = createUpdateSchema(serviceTitle)

export const crousels = pgTable("crousels", {
  id: uuid("id").primaryKey().defaultRandom(),
  imageUrl: text("image_url"),
  imageKey: text("image_key"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const crouselsInsertSchema = createInsertSchema(crousels)
export const crouselsSelectSchema = createSelectSchema(crousels)
export const crouselsUpdateSchema = createUpdateSchema(crousels)