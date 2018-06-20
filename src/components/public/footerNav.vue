<template>
  <div id="footer-nav">
    <router-link :to="item.href" class="nav-item" v-for="item in nav" :key="item.href">
      <img :src="item.img" alt="">
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
        {href: '/index', img: 'http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108', name: '首页'},
        {href: '/index1', img: 'http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108', name: '分类'},
        {href: '/index2', img: 'http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108', name: '订单'},
        {href: '/index3', img: 'http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108', name: '我的'}
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
    border-top: 1px solid #333;
    height: 100px;
    background-color: #fff;
    .nav-item {
      flex: 1;
      text-align: center;
      overflow: hidden;
      img {
        height: 40px;
        width: 40px;
        display: inline-block;
        margin: 6px auto;
      }
      p {
        height: 44px;
        line-height: 44px;
        font-size: 22px;
      }
    }
  }
</style>
