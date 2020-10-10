<script>
  export let title;
</script>

<svelte:head>
  <link href="prism-themes/earth-song.css" rel="stylesheet" />
  <title>{title}</title>
</svelte:head>

<article>
  <header>
    <h1>{title}</h1>
  </header>
  <slot />
  <footer>Footer</footer>
</article>
