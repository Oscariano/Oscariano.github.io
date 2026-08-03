<script>
  let {
    text = "Click me",
    icon = "lucide:simile",
    link,
  } = $props();
</script>

<a class="flex items-stretch bg-[#FFFFFF] w-fit overflow-hidden" href={link} target="_blank">
    <div class="bg-[#424242] shrink-0 h-full aspect-square flex justify-center items-center p-[0.2em]">
        {#if icon}
            <iconify-icon
                width="1em"
                height="1em"
                icon={icon}
                style="color: #FFFFFF"
            ></iconify-icon>
        {/if}
    </div>
    <div class="px-[0.6em] flex items-center">
        <span>
            {text}
        </span>
    </div>
</a>