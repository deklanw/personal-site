<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    @font-face {
      font-family: Epilogue;
      font-weight: 400;
      src: url(/fonts/Epilogue-Regular.ttf);
    }

    body {
      font-family: Epilogue;
    }

    p {
      @apply my-4;
    }

    h1 {
      @apply text-2xl;
    }
  }
</style>
