<script>
  import '../app.css';
  import { onMount } from 'svelte';

  onMount(() => import('iconify-icon'));
</script>

<nav class="w-full flex justify-start md:justify-end">
  <span class="block md:hidden">
    <iconify-icon icon="pixelarticons:menu" width="2em" height="2em"></iconify-icon>
  </span>
  <ul class="hidden md:flex md:items-center md:gap-8 md:block md:text-xl lg:text-2xl">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<section class="h-screen flex flex-col items-center">
  <h3 class="md:self-start text-[clamp(1rem,8vw,4rem)] mt-10 text-[#707070]">Hello! This is,</h3>
  <h1 class="md:self-start text-[clamp(4rem,36vw,16rem)] leading-[0.6]">Oscar</h1>
  <h2 class="md:self-start text-[clamp(2rem,16vw,8rem)] leading-[0.9]">Song</h2>
  
  <h1 class="absolute top-35 left-1/2 -translate-x-1/2 text-[clamp(4rem,35vw,24rem)] z-[-1] text-[#E3E5DF] leading-[0.8] md:left-10 md:-translate-x-0 md:top-20">Seattle,<br> WA</h1>
  
  <h3 class="self-start text-[clamp(1rem,6vw,2rem)] mt-25">+1 (206) 694-9786</h3>
  <h3 class="self-start text-[clamp(1rem,6vw,2rem)]">oscarsjs@uw.edu</h3>
  
  <img src="/ascii_me.svg" alt="Profile" class="absolute top-65 right-2 md:right-10 w-70 z-[-1] lg:w-90 lg:top-45 lg:right-10">
  
  <iconify-icon icon="pixelarticons:arrow-big-down-dash-sharp" width="40" height="40" class="fixed bottom-3 self-center z-[-1] animate-bounce"></iconify-icon>
</section>