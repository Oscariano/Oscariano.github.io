<script>
  import { blogs } from '$lib/data/blogs.js';
  import BlogTile from '$lib/components/blog_tile.svelte';
</script>

<section class="mt-20 px-4 md:px-10 flex justify-center">
  <div class="flex flex-col gap-2 w-[90%]">
    {#each blogs as blog}
      <BlogTile blog={blog}/>
    {/each}
  </div>
</section>