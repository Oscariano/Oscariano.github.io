<script>
  import Button from "./button.svelte";
  import { onMount } from "svelte";

  onMount(() => import("iconify-icon"));

  let { creation } = $props();

  let title = $derived(creation.title);
  let description = $derived(creation.description);
  let img_url = $derived(creation.img_url);
  let img_alt = $derived(creation.img_alt);
  let github = $derived(creation.github);
  let markdown = $derived(creation.markdown);
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
    {#if markdown}  
    <a class="bg-[#424242] p-1 aspect-square flex justify-center items-center" href={markdown} title="markdown-page">
      <iconify-icon
          width="1em"
          height="1em"
          icon={"pixelarticons:article"}
          style="color: #FFFFFF"
          class="text-2xl"
      ></iconify-icon>
    </a>
    {/if}
  </div>
  <div class="w-full flex justify-center bg-[#D6D3C5]">
    <p class="text-[#95938B]">
      {time}
    </p>
  </div>
  
  <img src={img_url} alt={img_alt} class="aspect-16/9 object-cover">

  <p>
    {description}
  </p>
  
  <hr class="w-full h-0.5 border-0 bg-[#D6D3C5]">

  <div class="w-full flex justify-end gap-2 text-[1.5rem]">
    {#if link}
    <Button icon="pixelarticons:link" text="Visit" link={link}/>
    {/if}
    {#if github}
    <Button icon="pixelarticons:git-branch" text="Source" link={github}/>
    {/if}
  </div>
</div>
