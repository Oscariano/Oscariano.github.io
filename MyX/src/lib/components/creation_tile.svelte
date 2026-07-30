<script>
  import Button from "./button.svelte";
  import { onMount } from "svelte";
  import { slugify } from "$lib/utils/slug.js";

  onMount(() => import("iconify-icon"));

  let { creation } = $props();

  let title = $derived(creation.title);
  let description = $derived(creation.description);
  let status = $derived(creation.status);
  let slug = $derived(slugify(creation.title));

  function handleClick() {
    console.log('button clicked!')
  }
</script>
 
<div
  class="bg-[#E8E4D5] flex flex-col px-2 py-2 items-center w-full gap-2 my-2 border-[#D6D3C5] border-6 shadow-[6px_6px_0px_-1px_#AAAAAA]"
>
  <div class="flex justify-between items-center w-full">
    <h1 class="text-4xl">
      {title} 
    </h1>
    {#if status == "In Progress"}
      <h2 class="text-[clamp(1.3rem,4vw,2rem)] text-[#707070]">{status}</h2>
    {:else if status == "Archived"}
      <h2 class="text-[clamp(1.3rem,4vw,2rem)] text-[#9D383A]">{status}</h2>
    {:else if status == "Active"}
      <h2 class="text-[clamp(1.3rem,4vw,2rem)] text-[#559D38]">{status}</h2>
    {:else}
      <h2 class="text-[clamp(1.3rem,4vw,2rem)] text-[#707070]">{status}</h2>
    {/if}
  </div>
  
  <img src="/valuables.png" alt="valuables" class="aspect-16/9 object-cover">

  <p>
    {description}
  </p>
  
  <hr class="w-full h-0.5 border-0 bg-[#D6D3C5]">

  <div class="w-full flex justify-end gap-2">
    <Button icon="pixelarticons:link" text="Visit" onclick={handleClick}/>
    <Button icon="pixelarticons:git-branch" text="Source" onclick={handleClick}/>
  </div>

  <div class="w-full flex justify-center bg-[#D6D3C5]">
    <p class="text-[#95938B]">
      Jan 26 - Now
    </p>
  </div>
</div>
