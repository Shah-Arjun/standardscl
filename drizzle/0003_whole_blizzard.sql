CREATE TYPE "public"."category" AS ENUM('School', 'Teachers', 'Students', 'Events', 'Sports', 'Activities', 'Educational Tour', 'Memories');--> statement-breakpoint
CREATE TABLE "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" "category" NOT NULL,
	"title" varchar(255) NOT NULL,
	"photo_public_id" varchar NOT NULL,
	"url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
