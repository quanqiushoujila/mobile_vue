<template>
  <div id="search">
    <search-header></search-header>
  </div>
</template>
<script>
import searchHeader from 'components/search/searchHeader'
export default {
  name: 'search',
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  components: {searchHeader}
}
</script>

<style lang="scss" scoped>
  @import 'scss/element.scss';
  #search {
    padding-top: $paddingTop;
  }
</style>
