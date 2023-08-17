<template>
  <div class="w-full bg-white">
    <main>
      <section class="w-full max-site-width mx-auto flex flex-col items-start justify-start">
        <div>
          <h2 class="text-xl text-primary">Jérémie Helme</h2>
          <h2 class="text-2xl leading-2xl tracking-tight text-primary font-karla font-bold">
            Creative<br /><span class="text-secondary">Developer</span>
          </h2>
        </div>
      </section>
      <section class="mt-40 max-half-width mx-auto">
        <h3 class="text-xl text-primary leading-xl font-karla font-bold">I am passionate about <span
            class="text-secondary">crafting</span> intuitive and
          visually <span class="text-secondary">appealing</span> user <span class="text-secondary">experiences</span></h3>
      </section>
      <section class="mt-40">
        <div class="flex flex-row gap-x-5">
          <Button>VueJs</Button>
          <Button>React</Button>
          <Button>React Native</Button>
        </div>
      </section>
    </main>
    <div class="absolute bottom-5 right-5 flex flex-row gap-x-5 items-center text-right">
      <p class="font-karla text-primary leading-tight">Hey ! I’m available in<br />freelance</p>
      <Button>Contact me</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
