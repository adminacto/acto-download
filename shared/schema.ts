import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const downloads = pgTable("downloads", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  version: text("version").notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  rating: integer("rating").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertDownloadSchema = createInsertSchema(downloads).omit({
  id: true,
  createdAt: true,
});

export const insertFeedbackSchema = createInsertSchema(feedback).omit({
  id: true,
  createdAt: true,
});

export type InsertDownload = z.infer<typeof insertDownloadSchema>;
export type Download = typeof downloads.$inferSelect;
export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;
export type Feedback = typeof feedback.$inferSelect;
