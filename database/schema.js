import { sql } from "drizzle-orm";
import { decimal } from "drizzle-orm/gel-core";
import { pgTable, serial, varchar, text, float, timestamp, pgEnum } from "drizzle-orm/pg-core";

// --- Enums ---
export const genderEnum = pgEnum("gender_enum", ["male", "female", "other"]);

export const fieldOfStudyEnum = pgEnum("field_of_study_enum", [
  "Mathematics",
  "Science",
  "Computer Science/Engineering",
  "Education",
  "Sanskrit",
  "Economics",
  "Other",
]);

export const postEnum = pgEnum("position_enum", [
  "Founder",
  "Principal",
  "Vice-Principal",
  "Exam Coordinator",
  "ECA Coordinator",
  "ECL Coordinator",
  "Accountant",
  "ECA Member",
  "ECL Member",
  "Assistant Teacher",
  "Martial Art(Karate) Teacher",
  "Dance Teacher",
  "Music Teacher",
  "Arts/Drawing Teacher",
  "Other"
]);

export const employmentEnum = pgEnum("employment_enum", ["Full Time", "Part Time", "Contract", "Other"]);



// teachers schema
export const teachersTable =  pgTable("teachers", {
  //takes table name and its columns names with validation as object
  id : serial("id").primaryKey(), //serial is a helper function that creates an auto-incrementing integer column, and id passed is actual name of db column, and primaryKey() marks it as the primary key of the table.
  teacherName: varchar("teacher_name", { length: 255 }).notNull(),
  gender: genderEnum("gender").notNull(),
  email: varchar("email", { length: 255 }).unique(),
  phone: varchar("phone", { length: 20 }).notNull(),
  address: text("address"),

  employmentType: employmentEnum("employment_type").notNull(),
  qualification: text("qualification", { length: 255 }).notNull(),

  fieldOfStudy: fieldOfStudyEnum("field_of_study").notNull(),
  subjectTeaches: text("subject_teaches", { length: 100 }).notNull(),
  post: postEnum("position").notNull(),

  experience: decimal("years_of_experience"), // can store decimal years

  photo: text("photo", { length: 500 }).notNull(), // URL of teacher's photo

//   createdAt : timestamp("created_at").defaultNow(),    // or
  createdAt : timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
//   updatedAt : timestamp("updated_at").defaultNow().onUpdateNow(),
  updatedAt : timestamp("updated_at").defaultNow(sql`CURRENT_TIMESTAMP`),
});



// other schema goes here