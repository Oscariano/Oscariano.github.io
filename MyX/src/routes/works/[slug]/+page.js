import { error } from '@sveltejs/kit';
import { creations } from '$lib/data/creations.js';
import { slugify } from '$lib/utils/slug.js';

export const prerender = true;

export function entries() {
  return creations.map((c) => ({ slug: slugify(c.title) }));
}

export function load({ params }) {
  const creation = creations.find((c) => slugify(c.title) === params.slug);

  if (!creation) {
    throw error(404, `Creation "${params.slug}" not found`);
  }

  return { creation };
}
