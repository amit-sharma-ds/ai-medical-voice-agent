import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer(),
});

export const SessionChatTable = pgTable("session_chat", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionId: varchar({ length: 255 }).notNull(),
  message: varchar({ length: 1000 }),
});
