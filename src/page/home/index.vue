<template>
  <div id="home">
    <search/>
    <slide/>
    <footer-nav/>
  </div>
</template>

<script>
import search from 'components/home/search'
import slide from 'components/home/slide'
import footerNav from 'components/public/footerNav'
export default {
  name: 'home',
  components: {
    search,
    slide,
    footerNav
  }
}
</script>

<style lang="scss" scoped>
  #home {
    padding: 100px 0;
  }
</style>
