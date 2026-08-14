import { error } from '@sveltejs/kit';
import { works } from '$lib/data/works';
import { slugify } from '$lib/utils/slug';

export const prerender = true;

export function entries() {
  return works.map((c) => ({ slug: slugify(c.title) }));
}

export function load({ params }) {
  const work = works.find((c) => slugify(c.title) === params.slug);

  if (!work) {
    throw error(404, `work "${params.slug}" not found`);
  }

  return { work };
}
