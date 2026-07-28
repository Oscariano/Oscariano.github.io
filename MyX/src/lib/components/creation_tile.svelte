<script>
  import { slugify } from "$lib/utils/slug.js";

  let { creation } = $props();

  let title = $derived(creation.title);
  let description = $derived(creation.description);
  let status = $derived(creation.status);
  let slug = $derived(slugify(creation.title));
</script>

<div
  class="bg-[#E8E4D5] shadow-[-36px_-36px_0px_-32px_#848484] flex items-center w-full"
>
  <div class="px-4 w-full">
    <div class="flex justify-between items-center w-full">
      <h1 class="text-[clamp(1rem,6vw,2rem)]">{title}</h1>
      <div class="leading-none flex flex-col items-end">
        {#if status == "In Progress"}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#707070]">{status}</p>
        {:else if status == "Archived"}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#9D383A]">{status}</p>
        {:else if status == "Active"}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#559D38]">{status}</p>
        {:else}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#707070]">{status}</p>
        {/if}
        <p class="text-[clamp(1rem,4vw,1.5rem)] text-[#646464] self-end">
          Jan 2026 - now
        </p>
      </div>
    </div>
    <div class="h-full overflow-hidden line-clamp-3">
      <p class="text-[clamp(1rem,4vw,1.5rem)] text-[#646464]">
        {description}
      </p>
    </div>
  </div>
  <a href="/creations/{slug}" aria-label="Project link" class="bg-[#505050] h-[100%] px-1 flex items-center">
    <iconify-icon
      width="1em"
      height="1em"
      class="text-2xl"
      icon="pixelarticons:chevron-right"
      style="color: #E8E4D5"
    ></iconify-icon>
  </a>
</div>
