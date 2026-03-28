<script>
  export let creation;

  let title = creation.title;
  let description = creation.description;
  let url = creation.url;
  let status = creation.status;
  let imgUrl = creation.imgUrl;
  let imgAlt = creation.imgAlt;

  let expanded = false;

  console.log(url);
</script>

<div class="flex flex-col justify-end">
  <div
    class="flex justify-between min-h-[6rem] shadow-[0px_10px_0px_-4px_#00000024]"
  >
    {#if expanded}
      <button
        onclick={() => (expanded = !expanded)}
        title="collapse"
        class="bg-[#ccc7b4]"
        ><iconify-icon
          icon="pixelarticons:chevron-down"
          width="2em"
          height="2em"
          style="pointer-events: none;"
        ></iconify-icon></button
      >
    {:else}
      <button
        onclick={() => (expanded = !expanded)}
        title="expand"
        class="bg-[#ccc7b4]"
        ><iconify-icon
          icon="pixelarticons:chevron-right"
          width="2em"
          height="2em"
          style="pointer-events: none;"
        ></iconify-icon></button
      >
    {/if}
    <div class="bg-[#F5F2E6] w-full h-full px-4 py-2 flex flex-col">
      <div class="flex justify-between items-center">
        <h1 class="text-[clamp(1rem,6vw,2rem)]">{title}</h1>
        {#if status == "In Progress"}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#707070]">{status}</p>
        {:else if status == "Archived"}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#9D383A]">{status}</p>
        {:else if status == "Active"}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#559D38]">{status}</p>
        {:else}
          <p class="text-[clamp(1rem,4vw,2rem)] text-[#707070]">{status}</p>
        {/if}
      </div>
      <div class="h-full overflow-hidden line-clamp-3">
        <p class="text-[clamp(1rem,4vw,1.5rem)] text-[#646464]">
          {description}
        </p>
      </div>
      {#if expanded}
        <div
          class="bg-[#f5f2e6] px-4 py-2 flex flex-col shadow-[0px_10px_0px_-4px_#00000024]"
        >
          {#if imgUrl != undefined && imgUrl != ""}
            <div class="w-full max-h-max px-4 py-2 bg-[#fefefe]">
              <img src={imgUrl} alt={imgAlt} />
            </div>
          {/if}
          <p class="text-[clamp(1rem,4vw,1.5rem)] text-[#646464] mb-2">
            {description}
          </p>
          <ul class="w-full flex justify-end">
            {#if url != undefined && url != ""}
              <li class="bg-[#ccc7b4] flex items-center">
                <div class="bg-[#646464] h-full flex items-center p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    ><path
                      fill="#f5f2e6"
                      d="M5 2h4v2H7v2H5zm0 10H3V6h2zm2 2H5v-2h2zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2zm0 0v2H7v-2zm6-12v2H9V4zm4 2h-2V4h-2V2h4zm0 6V6h2v6zm-2 2v-2h2v2zm-2 2v-2h2v2zm0 2h-2v-2h2zm0 0h2v4h-2z"
                    /></svg
                  >
                </div>
                <div class="w-full h-full flex items-center px-2">
                  <a
                    href={url}
                    class="text-[clamp(1rem,4vw,1.5rem)] text-[#646464]"
                    >View Project</a
                  >
                </div>
              </li>
            {/if}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</div>
