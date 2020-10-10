<script lang="ts">
  import { stores } from "@sapper/app";
  const { preloading } = stores();

  import Nav from "../components/Nav.svelte";
  import Tailwind from "../components/Tailwind.svelte";

  export let segment;
</script>

<style>
  #frame {
    background: linear-gradient(-45deg, #d4ab97, #f9f6d6, #a17a6e, #6b5d61);
    background-size: 400% 400%;
    padding: 5px;
  }

  .grad {
    background: linear-gradient(-45deg, #d4ab97, #f9f6d6, #a17a6e, #6b5d61);
    background-size: 400% 400%;
    animation: gradient 2s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>

<Tailwind />
<div id="frame" class={$preloading ? 'grad' : ''}>
  <div class="min-h-screen bg-pale-yellow">
    <Nav {segment} />
    <main class="bg-pale-yellow w-1/2 min-w-64 mx-auto py-8">
      <slot />
    </main>
  </div>
</div>
