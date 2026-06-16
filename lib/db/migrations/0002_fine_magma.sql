CREATE TABLE "ministry_pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"sub" text DEFAULT '' NOT NULL,
	"tagline" text DEFAULT '' NOT NULL,
	"hero" text DEFAULT '' NOT NULL,
	"ages" text DEFAULT '' NOT NULL,
	"schedule" text DEFAULT '' NOT NULL,
	"location" text DEFAULT '' NOT NULL,
	"leader" text DEFAULT '' NOT NULL,
	"leader_role" text DEFAULT '' NOT NULL,
	"description" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"expectations" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"scripture" jsonb DEFAULT '{"quote":"","ref":""}'::jsonb NOT NULL,
	"published" boolean DEFAULT true NOT NULL,
	"sort" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "ministry_pages_slug_unique" UNIQUE("slug")
);
