<script>
  import '../../../app.css';
  import NavBar from '$lib/components/nav_bar.svelte';
  import { slugify } from '$lib/utils/slug';
  import { onMount } from 'svelte';

  onMount(() => import('iconify-icon'));

  /** @type {{ 
   * data: {
   *    blog: {
   *        title: string,
   *        published_date: string,
   *        markdown: string,
   *    }
   * }}} */
  let { data } = $props();

  let blog = $derived(data.blog);

  /** @type {Record<string, { default: import('svelte').Component }>} */
  const markdownModules = import.meta.glob('/src/lib/data/blogs/*.svx', { eager: true });

  let markdownComponent = $derived.by(() => {
    const slug = slugify(blog.title);
    for (const [path, mod] of Object.entries(markdownModules)) {
      const filename = path.split('/').pop()?.replace(/\.svx$/, '');
      if (filename && slugify(filename) === slug) {
        return mod.default;
      }
    }
    return null;
  });
</script>

<svelte:head>
  <title>{blog.title}</title>
</svelte:head>

<NavBar />

<section class="mt-20 px-8 md:px-10 flex justify-center">
  <div class="flex flex-col max-w-2xl w-full">
    <a href="/blog" class="text-[clamp(1.4rem,3vw,2rem)] text-[#646464] self-start flex items-center h-fit gap-1 underline">
      <iconify-icon icon="pixelarticons:arrow-left-box" width="1em" height="1em" class="text-xl"></iconify-icon> 
      <span>Back</span>
    </a>

    {#if markdownComponent}
      {@const Markdown = markdownComponent}
      <article class="prose prose-sm max-w-none prose-p:my-4 prose-headings:my-4 prose-ul:my-1 prose-li:my-0 prose-headings:text-[#424242] prose-a:text-[#424242] text-[#565656] text-[clamp(1.25rem,4vw,1.5rem)] mt-4">
        <Markdown />
      </article>
    {/if}
  </div>
</section>
