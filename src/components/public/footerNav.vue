<template>
  <div id="footer-nav">
    <router-link to="/index" class="nav-item"><img src="http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt=""><p>首页</p></router-link>
    <router-link to="/index" class="nav-item"><img src="http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt=""><p>分页</p></router-link>
    <router-link to="/index" class="nav-item"><img src="http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt=""><p>分页</p></router-link>
    <router-link to="/index" class="nav-item"><img src="http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt=""><p>分页</p></router-link>
  </div>
</template>
<script>
export default {
  name: 'footerNav'
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
        height: 44px;
        width: 44px;
        display: inline-block;
        margin: 12px auto 6px;
      }
      p {
        height: 44px;
        line-height: 44px;
        font-size: 22px;
      }
    }
  }
</style>
