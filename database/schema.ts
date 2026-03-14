import { sql } from "drizzle-orm";
import { pgTable, serial, varchar, text, timestamp, pgEnum, jsonb, numeric } from "drizzle-orm/pg-core";

// --- Enums ---
export const genderEnum = pgEnum("gender_enum", ["male", "female", "other"]);



// teachers schema
export const teachersTable =  pgTable("teachers", {
  //takes table name and its columns names with validation as object
  id : serial("id").primaryKey(), //serial is a helper function that creates an auto-incrementing integer column, and id passed is actual name of db column, and primaryKey() marks it as the primary key of the table.
  teacherName: varchar("teacher_name", { length: 255 }).notNull(),
  gender: genderEnum("gender"),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  address: text("address"),

  employmentType: text("employment_type").notNull(),

  qualifications: jsonb("qualification").$type<string[]>(),

  subjectsTeaches: jsonb("subject_teaches").$type<string[]>(),
  post: jsonb("position").$type<string[]>(),

  experience: numeric("years_of_experience", { precision: 5, scale: 2 }).$type<number>().notNull(),
  photo: text("photo").notNull(), // URL of teacher's photo

//   createdAt : timestamp("created_at").defaultNow(),    // or
  createdAt : timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
//   updatedAt : timestamp("updated_at").defaultNow().onUpdateNow(),
  updatedAt : timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});



// other schema goes here