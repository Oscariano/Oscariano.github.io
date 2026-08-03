<script>
  import '../../../app.css';
  import NavBar from '$lib/components/nav_bar.svelte';
  import { slugify } from '$lib/utils/slug.js';
  import { onMount } from 'svelte';
  import Button from '$lib/components/button.svelte';

  onMount(() => import('iconify-icon'));

  /** @type {{ 
   * data: {
   *    creation: {
   *        title: string,
   *        description: string,
   *        status: string,
   *        url?: string,
   *        imgUrl?: string,
   *        imgAlt?: string,
   *        github?: string,
   *        link?: string
   *    }
   * }}} */
  let { data } = $props();

  let creation = $derived(data.creation);

  /** @type {Record<string, { default: import('svelte').Component }>} */
  const markdownModules = import.meta.glob('/src/lib/data/*.svx', { eager: true });

  let markdownComponent = $derived.by(() => {
    const slug = slugify(creation.title);
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
  <title>{creation.title}</title>
</svelte:head>

<NavBar />

<section class="mt-20 px-8 md:px-10 flex justify-center">
  <div class="flex flex-col max-w-4xl">
    <a href="/works" class="text-[clamp(1.2rem,3vw,2rem)] text-[#646464] self-start flex items-center h-fit gap-1">
      <iconify-icon icon="pixelarticons:arrow-left-box" width="1em" height="1em" class="text-xl"></iconify-icon> 
      <span>Back</span>
    </a>

    <!-- <div class="w-full flex gap-2 text-[1.2rem]">
      {#if creation.link}
        <Button icon="pixelarticons:link" text="Visit" link={creation.link}/>
      {/if}

      {#if creation.github}
        <Button icon="pixelarticons:git-branch" text="Source" link={creation.github}/>
      {/if}
    </div> -->

    {#if markdownComponent}
      {@const Markdown = markdownComponent}
      <article class="prose prose-headings:text-[#424242] prose-a:text-[#424242] text-[#565656] text-[clamp(1rem,4vw,1.25rem)] mt-4">
        <Markdown />
      </article>
    {/if}
  </div>
</section>
