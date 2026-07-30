<script>
  import '../../app.css';
  import NavBar from '$lib/components/nav_bar.svelte';
  import { creations } from '$lib/data/creations.js';
  import CreationTile from '$lib/components/creation_tile.svelte';
</script>

<NavBar />

<section class="mt-20 px-4 md:px-10 flex justify-center">
  <div class="flex flex-col gap-4 w-[90%]">
    {#each creations as creation}
      <CreationTile creation={creation}/>
    {/each}
  </div>
</section>