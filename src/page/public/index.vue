<template>
  <div id="public">
    <router-view/>
    <footer-nav/>
  </div>
</template>

<script>
import footerNav from 'components/public/footerNav'
export default {
  name: 'App',
  components: {
    footerNav
  }
}
</script>

<style scoped lang="scss">
</style>
