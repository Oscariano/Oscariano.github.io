<script>
  import { onMount } from 'svelte';
  import '../app.css';
  
  onMount(() => import('$lib/icons.js'));
</script>

<nav class="w-screen flex justify-start md:justify-end">
  <span class="block md:hidden">
    <rvt-icon name="menu"></rvt-icon>
  </span>
  <ul class="hidden md:flex md:items-center md:gap-4 md:block">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<h3 class="self-center text-3xl mt-10 text-[#707070]">Hello! This is,</h3>
<h1 class="self-center text-9xl leading-[0.7]">Oscar</h1>
<h2 class="self-center text-5xl">Song</h2>

<h1 class="absolute top-35 left-1/2 -translate-x-1/2 text-[9rem] z-[-1] text-[#E3E5DF] leading-[0.8]">Seattle, WA</h1>

<h3 class="self-left text-2xl mt-25 ml-6">+1 (206) 694-9786</h3>
<h3 class="self-left text-2xl ml-6">oscarsjs@uw.edu</h3>

<img src="/ascii_me.svg" alt="Profile" class="absolute bottom-0 right-2 w-70 z-[-1]">