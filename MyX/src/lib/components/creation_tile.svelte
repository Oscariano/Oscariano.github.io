<script>
  import Button from "./button.svelte";
  import { onMount } from "svelte";
  import { slugify } from "$lib/utils/slug.js";

  onMount(() => import("iconify-icon"));

  let { creation } = $props();

  let title = $derived(creation.title);
  let description = $derived(creation.description);
  let img_url = $derived(creation.img_url);
  let img_alt = $derived(creation.img_alt);
  let status = $derived(creation.status);
  let github = $derived(creation.github);
  let slug = $derived(slugify(creation.title));
  let link = $derived(creation.link)
  let time = $derived(creation.time)

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
  
  <img src={img_url} alt={img_alt} class="aspect-16/9 object-cover">

  <p>
    {description}
  </p>
  
  <hr class="w-full h-0.5 border-0 bg-[#D6D3C5]">

  <div class="w-full flex justify-end gap-2">
    {#if link}
    <Button icon="pixelarticons:link" text="Visit" link={link}/>
    {/if}
    {#if github}
    <Button icon="pixelarticons:git-branch" text="Source" link={github}/>
    {/if}
  </div>

  <div class="w-full flex justify-center bg-[#D6D3C5]">
    <p class="text-[#95938B]">
      {time}
    </p>
  </div>
</div>
