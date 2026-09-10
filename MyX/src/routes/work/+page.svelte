<script>
  import { works } from '$lib/data/works.js';
  import CreationTile from '$lib/components/creation_tile.svelte';
</script>

<section class="mt-20 px-4 md:px-10 flex justify-center">
  <div class="flex flex-col gap-4 w-[90%]">
    {#each works as work}
      <CreationTile creation={work}/>
    {/each}
  </div>
</section>