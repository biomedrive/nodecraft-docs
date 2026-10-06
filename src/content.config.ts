import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),

	// One entry per plugin release, keyed by version. Edit src/data/changelog.yaml.
	changelog: defineCollection({
		loader: file('src/data/changelog.yaml'),
		schema: z.object({
			// YAML reads an unquoted 2026-11-02 as a date; accept either form.
			date: z.union([z.date(), z.string()]).optional(),
			engines: z.string().optional(),
			summary: z.string().optional(),
			// Markdown shown in a highlighted box above the changes: for what a
			// buyer must know or do (a critical fix and its steps).
			notice: z.string().optional(),
			changes: z.array(
				z.object({
					type: z.enum(['new', 'improved', 'fix', 'removed']),
					text: z.string(),
				}),
			),
		}),
	}),
};
