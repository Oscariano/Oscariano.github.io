<script>
  import { onMount } from "svelte";

  onMount(() => import("iconify-icon"));

  let { blog } = $props();

  let title = $derived(blog.title);
  let published_date = $derived(blog.published_date);
  let icon = $derived(blog.icon);
  let markdown = $derived("/blog".concat(blog.markdown));
</script>
 
<div
  class="bg-[#E8E4D5] flex px-2 py-2 items-center w-full gap-2 my-2 border-[#D6D3C5] border-6 shadow-[6px_6px_0px_-1px_#AAAAAA]"
>
  <div class="flex flex-col justify-between items-start w-full">
    <p class="text-[#95938B]">
        {published_date}
    </p>
    <h1 class="text-3xl">
      {title} 
    </h1>
    <a href={markdown} class="text-xl underline">
        Read more
    </a>
  </div>
  <iconify-icon
      width="1em"
      height="1em"
      icon={icon}
      style="color: #95938B"
      class="text-5xl"
  ></iconify-icon>
</div>
