<template>
  <section id="search-home">
    <div class="type">
      <i class="icon iconfont icon-icon3"></i>
    </div>
    <div class="search-container">
      <router-link to="/search">
        <div class="search-wrapper">
          <i class="fa fa-search"></i>
          <span>搜索</span>
        </div>
      </router-link>
    </div>
    <div class="address">
      <i class="icon iconfont icon-shouye17"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'searchHome'
}
</script>

<style lang="scss" scoped>
  @import 'scss/element.scss';

  #search-home {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    @include list(row);
    background-color: #f15353;
    .search-container {
      width: 70%;
      .search-wrapper {
        width: 100%;
        height: 60px;
        margin-top: 10px;
        background-color: #fff;
        border-radius: 60px;
        line-height: 50px;
        color: #999;
        i {
          display: inline-block;
          font-size: 30px;
          margin-left: 10px;
        }
        span {
          display: inline-block;
          font-size: 25px;
        }
      }
    }
    .type, .address {
      line-height: 80px;
      text-align: center;
      width: 15%;
      i {
        font-size: 50px;
        color: #fff;
      }
    }
  }
</style>
