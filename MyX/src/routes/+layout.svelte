<script lang="ts">
  import "$lib/styles/app.css";
  import favicon from "$lib/assets/favicon.svg";
  import NavBar from '$lib/components/nav_bar.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<NavBar/>
{@render children()}
