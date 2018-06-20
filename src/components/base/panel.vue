<template>
  <section id="panel">
    <h1 class="">{{title}}</h1>
    <slot/>
  </section>
</template>
<script>
  export default {
    name: 'panel'
  }
</script>

<style lang="scss" scoped>
  @import 'scss/element.scss';
</style>
