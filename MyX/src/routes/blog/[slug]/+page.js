import { error } from '@sveltejs/kit';
import { blogs } from '$lib/data/blogs';
import { slugify } from '$lib/utils/slug';

export const prerender = true;

export function entries() {
  return blogs.map((c) => ({ slug: slugify(c.title) }));
}

export function load({ params }) {
  const blog = blogs.find((c) => slugify(c.title) === params.slug);

  if (!blog) {
    throw error(404, `Blog "${params.slug}" not found`);
  }

  return { blog };
}
