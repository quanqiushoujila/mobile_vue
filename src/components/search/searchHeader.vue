<template>
  <div id="search-header">
    <div class="back">
      <router-link to="/home" class="back-icon">
        <i class="fa fa-angle-left"></i>
      </router-link>
    </div>
    <div class="search-wrapper">
      <input type="text" class="form-control" placeholder="搜索">
    </div>
    <div class="search-btn">
      <button type="submit" class="btn btn-danger">搜索</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'searchHeader'
}
</script>

<style lang="scss" scoped>
  @import 'scss/element.scss';
  #search-header {
    top: 0;
    height: 80px;
    @include fixed();
    background-color: #d7d7d7;
    @include list();
    text-align: center;
    .back-icon {
      display: block;
    }
    .back {
      font-size: 50px;
    }
    .search-btn, .back, .search-wrapper {
      height: 80px;
      line-height: 80px;
    }
    .search-btn {
      width: 20%;
      button {
        font-size: 30px;
        vertical-align: text-bottom;
      }
    }
    .back {
      width: 10%;
    }
    .search-wrapper {
      width: 70%;
      input {
        margin-top: 15px;
        border-radius: 50px;
        text-indent: 25px;
      }
    }
  }
</style>
