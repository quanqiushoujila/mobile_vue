<template>
  <div id="home">
    <search/>
    <slide/>
    <k-nav/>
  </div>
</template>

<script>
import kNav from 'components/home/nav'
import search from 'components/home/search'
import slide from 'components/home/kSlide'
export default {
  name: 'home',
  components: {
    search,
    slide,
    kNav
  }
}
</script>

<style lang="scss" scoped>
  @import 'scss/element.scss';
  #home {
    padding-top: $paddingTop;
    padding-bottom: $paddingBottom;
  }
</style>
