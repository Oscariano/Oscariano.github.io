<script>
  import { onMount } from 'svelte';
  import '../app.css';
  import 'rivet-icons/dist/rivet-icon-element.css';

  onMount(() => import('$lib/icons.js'));
</script>

<nav class="">
  <ul>
  <rvt-icon name="menu"></rvt-icon>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
