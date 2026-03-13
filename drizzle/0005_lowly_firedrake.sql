ALTER TABLE "teachers" DROP CONSTRAINT "teachers_email_unique";--> statement-breakpoint
ALTER TABLE "teachers" ALTER COLUMN "email" SET NOT NULL;