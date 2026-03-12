import { pgTable, pgEnum, serial, varchar, text, float, timestamp } from "drizzle-orm/pg-core";

// Field of Study Enum
// const fieldOfStudyEnum = pgEnum("field_of_study", [
//   "Mathematics",
//   "Science",
//   "Computer Science/Engineering",
//   "Education",
//   "Sanskrit",
//   "Economics",
//   "Other",
// ]);

// // Position/Post Enum
// const postEnum = pgEnum("position", [
//   "Founder",
//   "Principal",
//   "Vice-Principal",
//   "Exam Coordinator",
//   "ECA Coordinator",
//   "ECL Coordinator",
//   "Accountant",
//   "ECA Member",
//   "ECL Member",
//   "Assistant Teacher",
//   "Martial Art(Karate) Teacher",
//   "Dance Teacher",
//   "Music Teacher",
//   "Arts/Drawing Teacher",
//   "Other"
// ]);


pgTable("teachers", {
  //takes table name and its columns names with validation as object
  id: serial("id").primaryKey(), //serial is a helper function that creates an auto-incrementing integer column, and id passed is actual name of db column, and primaryKey() marks it as the primary key of the table.
  teacherName: varchar("teacher_name", { length: 255 }).notNull(),
  gender: pgEnum("gender", ["male", "female", "other"]).notNull(),
  email: varchar("email", { length: 255 }).unique(),
  phone: varchar("phone", { length: 20 }).notNull(),
  address: text("address"),

  employmentType: pgEnum("employment_type", ["Full Time", "Part Time", "Contract"]).notNull(),
  qualification: text("qualification", { length: 255 }).notNull(),

  fieldOfStudy: text("field_of_study").notNull(),

  subjectTeaches: text("subject_teaches", { length: 100 }).notNull(),
  post: text("position").notNull(),
  
  experience: float("years_of_experience"),              // years of teaching experience
  
  photo: text("photo", { length: 500 }).notNull(),     // URL of the teacher's photo

  createdAt: timestamp("created_at").defaultNow(),
});
