import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ensayosCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ensayos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Paupérrimo'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  ensayos: ensayosCollection,
};
