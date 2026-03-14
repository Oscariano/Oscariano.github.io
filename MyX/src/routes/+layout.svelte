<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="./node_modules/rivet-icons/dist/rivet-icon-element.css" />
</svelte:head>

{@render children()}
