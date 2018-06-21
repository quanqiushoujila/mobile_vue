<template>
  <div id="footer-nav">
    <router-link :to="item.href" class="nav-item" v-for="item in nav" :key="item.href">
      <i class="icon iconfont" :class="item.icon"></i>
      <p>{{item.name}}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'footerNav',
  data: function () {
    return {
      nav: [
        {href: '/home', icon: 'icon-shouye', name: '首页'},
        {href: '/search', icon: 'icon-icon3', name: '分类'},
        {href: '/index2', icon: 'icon-shouye9', name: '订单'},
        {href: '/index3', icon: 'icon-shouye1', name: '我的'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #footer-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    border-top: 1px solid #999;
    height: 100px;
    background-color: #fff;
    .nav-item {
      flex: 1;
      text-align: center;
      overflow: hidden;
      i {
        display: block;
        font-size: 50px;
      }
      p {
        height: 44px;
        line-height: 44px;
        font-size: 22px;
      }
    }
  }
</style>
