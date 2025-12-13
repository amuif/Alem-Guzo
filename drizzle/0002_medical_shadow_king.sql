ALTER TABLE "collections" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "collections" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "collections" ALTER COLUMN "source" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "collections" ALTER COLUMN "authors" SET DATA TYPE text[];--> statement-breakpoint
ALTER TABLE "collections" ALTER COLUMN "authors" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "collections" ALTER COLUMN "categories" SET DATA TYPE text[];--> statement-breakpoint
ALTER TABLE "collections" ALTER COLUMN "published_year" SET DATA TYPE text;