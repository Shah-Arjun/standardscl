CREATE TYPE "public"."employment_enum" AS ENUM('Full Time', 'Part Time', 'Contract', 'Other');--> statement-breakpoint
CREATE TYPE "public"."field_of_study_enum" AS ENUM('Mathematics', 'Science', 'Computer Science/Engineering', 'Education', 'Sanskrit', 'Economics', 'Other');--> statement-breakpoint
CREATE TYPE "public"."gender_enum" AS ENUM('male', 'female', 'other');--> statement-breakpoint
CREATE TYPE "public"."position_enum" AS ENUM('Founder', 'Principal', 'Vice-Principal', 'Exam Coordinator', 'ECA Coordinator', 'ECL Coordinator', 'Accountant', 'ECA Member', 'ECL Member', 'Assistant Teacher', 'Martial Art(Karate) Teacher', 'Dance Teacher', 'Music Teacher', 'Arts/Drawing Teacher', 'Other');--> statement-breakpoint
CREATE TABLE "teachers" (
	"id" serial PRIMARY KEY NOT NULL,
	"teacher_name" varchar(255) NOT NULL,
	"gender" "gender_enum" NOT NULL,
	"email" varchar(255),
	"phone" varchar(20) NOT NULL,
	"address" text,
	"employment_type" "employment_enum" NOT NULL,
	"qualification" text NOT NULL,
	"field_of_study" "field_of_study_enum" NOT NULL,
	"subject_teaches" text NOT NULL,
	"position" "position_enum" NOT NULL,
	"years_of_experience" numeric,
	"photo" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "teachers_email_unique" UNIQUE("email")
);
