import { pgTable as table, uniqueIndex } from "drizzle-orm/pg-core";
import { bigint, boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const rawAnalytics = pgTable("raw_analytics", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  country_code: varchar(),
  lang_region: varchar(),
  lang_language: varchar(),
  added_unix: bigint({
    mode: "bigint"
  }).notNull(),
  added_date: varchar().notNull(),
  added_iso: varchar().notNull(),
  is_robot: boolean().notNull(),
  hostname: varchar().notNull(),
  hostname_original: varchar(),
  path: varchar().notNull(),
  utm_source: varchar(),
  utm_medium: varchar(),
  utm_campaign: varchar(),
  utm_content: varchar(),
  utm_term: varchar(),
  referrer: varchar(),
  document_referrer: varchar(),
  browser_name: varchar(),
  browser_version: varchar(),
  os_name: varchar(),
  os_version: varchar(),
  device_type: varchar(),
  user_agent: varchar().notNull(),
  ip_address: varchar(),
  viewport_height: integer(),
  viewport_width: integer(),
  screen_width: integer(),
  screen_height: integer(),
});