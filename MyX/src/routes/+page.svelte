<script>
  import '../app.css';
  import Icon from "@iconify/svelte";
</script>

<nav class="w-full flex justify-start md:justify-end">
  <span class="block md:hidden">
    <Icon icon="pixelarticons:menu" width="2em" height="2em" />
  </span>
  <ul class="hidden md:flex md:items-center md:gap-4 md:block">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<section class="h-screen flex flex-col items-center">
  <h3 class="md:self-start text-[clamp(1rem,6vw,3rem)] mt-10 text-[#707070]">Hello! This is,</h3>
  <h1 class="md:self-start text-[clamp(5rem,30vw,12rem)] leading-[0.7]">Oscar</h1>
  <h2 class="md:self-start text-[clamp(3rem,18vw,7rem)] leading-[0.9]">Song</h2>
  
  <h1 class="absolute top-35 left-1/2 md:left-1/4 -translate-x-1/2 text-[9rem] z-[-1] text-[#E3E5DF] leading-[0.8]">Seattle,<br> WA</h1>
  
  <h3 class="self-start text-2xl mt-25">+1 (206) 694-9786</h3>
  <h3 class="self-start text-2xl">oscarsjs@uw.edu</h3>
  
  <img src="/ascii_me.svg" alt="Profile" class="absolute top-65 right-2 w-70 z-[-1]">
  
  <!-- <rvt-icon name="arrow-down" class="fixed bottom-3 self-center z-[-1] animate-bounce [--size:3rem]"></rvt-icon> -->
  <Icon icon="pixelarticons:arrow-big-down-dash-sharp" class="fixed bottom-3 self-center z-[-1] animate-bounce [--size:3rem] w-10 h-10" />
</section>