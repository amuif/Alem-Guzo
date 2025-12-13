CREATE TABLE "collections" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"source" varchar(20) NOT NULL,
	"source_id" text NOT NULL,
	"title" text NOT NULL,
	"authors" text,
	"thumbnail" text,
	"categories" text,
	"published_year" varchar(10),
	"metadata" jsonb,
	"created_at" timestamp DEFAULT now()
);
