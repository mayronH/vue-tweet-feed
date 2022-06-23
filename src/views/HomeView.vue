<script setup lang="ts">
</script>

<template>
  <main>
    <section class="banner"></section>

    <section class="about">
      <h1>The purpose</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero distinctio
        pariatur suscipit omnis eos harum, repudiandae dolorem tempora minima
        iste id necessitatibus culpa facilis expedita fugit incidunt accusamus
        nihil amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        exercitationem adipisci modi, dolores sunt quo.
      </p>
    </section>
  </main>
</template>

<style scoped>
main{
    display: grid;
    place-items: center;
}

.about{
    padding: var(--extra-small-size-fluid) var(--large-size-fluid);
}

.about h1{
    text-align: center;
    margin-bottom: var(--extra-small-size-fluid);
}

.about p{
    line-height: 2rem;

    margin-bottom: var(--extra-small-size-fluid);
}
</style>
