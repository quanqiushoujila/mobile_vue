<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class='router'/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$router' (to, from) {
      if (to.path === '/public/index') {
        this.transitionName = 'slide-left'
      } else if (from.path === '/search') {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.router {
  position: absolute;
  width: 100%;
  transition: all .5s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100% 0);
}
</style>
