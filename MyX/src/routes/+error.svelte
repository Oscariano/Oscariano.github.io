<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/state';

    onMount(() => import("iconify-icon"));
</script>

<section class="mt-20 px-4 md:px-10 flex flex-col items-center">
    <h1 class="text-9xl">{page.status}</h1>
    <h2 class="text-2xl">{page.error?.message}</h2>
    <iconify-icon
        width="1em"
        height="1em"
        icon="streamline-pixel:coding-apps-websites-dinosaur-error"
        style="color: #646464"
        class="text-9xl mt-15"
    ></iconify-icon>
</section>