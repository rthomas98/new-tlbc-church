CREATE TABLE "announcements" (
	"id" serial PRIMARY KEY NOT NULL,
	"message" text NOT NULL,
	"link_label" text DEFAULT '' NOT NULL,
	"link_url" text DEFAULT '' NOT NULL,
	"variant" text DEFAULT 'info' NOT NULL,
	"dismissible" boolean DEFAULT true NOT NULL,
	"published" boolean DEFAULT false NOT NULL,
	"sort" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
