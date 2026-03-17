<script>
  export let title;
  export let description;
  export let url;
  export let status;
</script>

<div class="flex justify-between h-40 shadow-[0px_10px_0px_-4px_#00000024]">
  <div class="bg-[#F5F2E6] w-full px-4 py-2">
    <div class="w-full">
      <div class="flex justify-between items-center">
        <h1 class="text-5xl">{title}</h1>
        {#if status == "In Progress"}
          <p class="text-2xl text-[#707070]">{status}</p>
        {:else if status == "Archived"}
          <p class="text-2xl text-[#9D383A]">{status}</p>
        {:else if status == "Active"}
          <p class="text-2xl text-[#559D38]">{status}</p>
        {:else}
          <p class="text-2xl text-[#707070]">{status}</p>
        {/if}
      </div>
      <p class="text-2xl">{description}</p>
    </div>
  </div>
  <a href={url} target="_blank" rel="noopener noreferrer" title="View {title}" class="h-full w-1/10 bg-[#CCC7B4] flex items-center justify-center"><iconify-icon icon="pixelarticons:chevron-right" width="2em" height="2em" style="pointer-events: none;"></iconify-icon></a>
</div>