ALTER TABLE "teachers" ALTER COLUMN "qualification" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "qualification" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "field_of_study" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "field_of_study" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "subject_teaches" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "subject_teaches" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "position" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "position" DROP NOT NULL;