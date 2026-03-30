<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import CreationTile from '$lib/components/creation_tile.svelte';
  import { creations } from '$lib/data/creations.js';
  import NavBar from '$lib/components/nav_bar.svelte';

  onMount(() => import('iconify-icon'));

  let scrollY = 0;
  const threshold = 100;

  let showNav = false;
</script>

<svelte:window bind:scrollY={scrollY} />

<NavBar />

<section class="h-dvh flex flex-col items-center py-2 px-4 md:px-10">
  <h3 class="md:self-start text-[clamp(1rem,8vw,4rem)] mt-20 text-[#707070]">Hello! This is,</h3>
  <h1 class="md:self-start text-[clamp(4rem,36vw,16rem)] leading-[0.6]">Oscar</h1>
  <h2 class="md:self-start text-[clamp(2rem,16vw,8rem)] leading-[0.9]">Song</h2>
  
  <h1 class="absolute top-35 left-1/2 -translate-x-1/2 text-[clamp(4rem,35vw,24rem)] z-[-1] text-[#E3E5DF] leading-[0.8] md:left-10 md:-translate-x-0 md:top-20">Seattle,<br> WA</h1>
  
  <ul class="mt-25 flex flex-col self-start gap-2 text-[#646464]">
    <li class="flex items-center"><iconify-icon width="2em" height="2em" icon="pixel:instagram"  style="color: #646464"></iconify-icon> <a href="https://www.instagram.com/0scar_song/" class="indent-2">Instagram</a></li>
    <li class="flex items-center"><iconify-icon width="2em" height="2em" icon="streamline-pixel:logo-linkedin"  style="color: #646464"></iconify-icon> <a href="www.linkedin.com/in/oscarsjs" class="indent-2">LinkedIn</a></li>
    <li class="flex items-center"><iconify-icon icon="streamline-pixel:logo-social-media-youtube" width="2em" height="2em"  style="color: #646464"></iconify-icon> <a href="https://www.youtube.com/@oscarsjs" class="indent-2">YouTube</a></li>
  </ul>
  
  <img src="/ascii_me.svg" alt="Profile" class="absolute bottom-0 right-2 md:right-10 w-auto h-[clamp(10rem,65vh,70rem)] z-[-1] lg:w-90 lg:h-auto lg:top-45 lg:right-10">
  
  <div class="fixed bottom-6 self-center z-[-1] animate-bounce flex flex-col items-center" style:opacity="{Math.max(0, 1 - (scrollY / threshold))}">
    <p class="leading-none">Scroll down</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M8 3h8v2H8zm0 4h8v2H8z"/><path d="M8 7h2v4H8zm-5 4h5v2H3zm0 2h2v2H3zm2 2h2v2H5zm2 2h2v2H7zm2 2h2v2H9zm2 2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2zm2-4h2v4h-2zm-3 0h3v2h-3zm-2-4h2v4h-2z"/></g></svg>

  </div>
</section>

<section class="px-4 md:px-10 text-center">
  <p class="text-[clamp(1rem,4vw,1.5rem)]">I am a software engineer with a passion for building web applications. I am currently working at Google as a software engineer. I have a background in computer science and mathematics. I am a quick learner and I am always looking for new challenges.</p>
</section>