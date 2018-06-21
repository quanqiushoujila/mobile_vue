<template>
  <div id="search">
    <search-header></search-header>
  </div>
</template>
<script>
import searchHeader from 'components/search/searchHeader'
export default {
  name: 'search',
  components: {searchHeader}
}
</script>

<style lang="scss" scoped>
  @import 'scss/element.scss';
  #search {
    padding-top: $paddingTop;
  }
</style>
