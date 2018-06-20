<template>
  <div id="home">
    <search/>
    <slide/>
    <k-nav/>
    <footer-nav/>
  </div>
</template>

<script>
import kNav from 'components/home/nav'
import search from 'components/home/search'
import slide from 'components/home/kSlide'
import footerNav from 'components/public/footerNav'
export default {
  name: 'home',
  components: {
    search,
    slide,
    footerNav,
    kNav
  }
}
</script>

<style lang="scss" scoped>
  #home {
    padding: 100px 0;
  }
</style>
