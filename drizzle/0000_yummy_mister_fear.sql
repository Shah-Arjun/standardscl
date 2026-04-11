CREATE TYPE "public"."gender_enum" AS ENUM('male', 'female', 'other');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TABLE "teachers" (
	"id" serial PRIMARY KEY NOT NULL,
	"teacher_name" varchar(255) NOT NULL,
	"gender" "gender_enum",
	"email" varchar(255) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"address" text,
	"employment_type" text NOT NULL,
	"qualification" jsonb,
	"subject_teaches" jsonb,
	"position" jsonb,
	"years_of_experience" numeric(5, 2) NOT NULL,
	"photo_public_id" varchar NOT NULL,
	"photo" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "users" (
	"email" varchar(255) PRIMARY KEY NOT NULL,
	"password" varchar(250) NOT NULL,
	"role" "user_role" NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
