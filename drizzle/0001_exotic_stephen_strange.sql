ALTER TABLE "teachers" ALTER COLUMN "employment_type" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "field_of_study" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "position" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."employment_enum";--> statement-breakpoint
DROP TYPE "public"."field_of_study_enum";--> statement-breakpoint
DROP TYPE "public"."position_enum";