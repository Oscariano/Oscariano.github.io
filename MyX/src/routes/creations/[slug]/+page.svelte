<script>
  import '../../../app.css';
  import NavBar from '$lib/components/nav_bar.svelte';
  import { slugify } from '$lib/utils/slug.js';
  import { onMount } from 'svelte';

  onMount(() => import('iconify-icon'));

  /** @type {{ data: { creation: { title: string, description: string, status: string, url?: string, imgUrl?: string, imgAlt?: string } } }} */
  let { data } = $props();

  let creation = $derived(data.creation);

  /** @type {Record<string, { default: import('svelte').Component }>} */
  const markdownModules = import.meta.glob('/src/lib/data/*.svx', { eager: true });

  let markdownComponent = $derived.by(() => {
    const slug = slugify(creation.title);
    for (const [path, mod] of Object.entries(markdownModules)) {
      const filename = path.split('/').pop()?.replace(/\.svx$/, '');
      console.log(filename, slug);
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

<section class="mt-20 px-4 md:px-10 flex justify-center">
  <div class="flex flex-col gap-4 w-[90%] max-w-4xl">
    <a href="/creations" class="text-[clamp(1rem,3vw,1.25rem)] text-[#646464] self-start flex items-center">
      <iconify-icon icon="pixelarticons:chevron-left-2" width="2em" height="2em"></iconify-icon> Back to Creations
    </a>

    <div class="flex justify-between items-baseline flex-wrap gap-2">
      <h1 class="text-[clamp(2rem,8vw,4rem)]">{creation.title}</h1>
      {#if creation.status === 'In Progress'}
        <p class="text-[clamp(1rem,4vw,2rem)] text-[#707070]">{creation.status}</p>
      {:else if creation.status === 'Archived'}
        <p class="text-[clamp(1rem,4vw,2rem)] text-[#9D383A]">{creation.status}</p>
      {:else if creation.status === 'Active'}
        <p class="text-[clamp(1rem,4vw,2rem)] text-[#559D38]">{creation.status}</p>
      {:else}
        <p class="text-[clamp(1rem,4vw,2rem)] text-[#707070]">{creation.status}</p>
      {/if}
    </div>

    {#if creation.imgUrl}
      <img src={creation.imgUrl} alt={creation.imgAlt ?? creation.title} class="w-full h-auto" />
    {/if}

    {#if creation.githubUrl}
      <a
        href={creation.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="text-[clamp(1rem,4vw,1.5rem)] text-[#646464] self-start flex items-center"
      >
      <iconify-icon icon="pixelarticons:github" width="none" height="none"></iconify-icon>
        Visit project
      </a>
    {/if}

    {#if markdownComponent}
      {@const Markdown = markdownComponent}
      <article class="prose text-[#646464] text-[clamp(1rem,4vw,1.25rem)] mt-4">
        <Markdown />
      </article>
    {/if}
  </div>
</section>
