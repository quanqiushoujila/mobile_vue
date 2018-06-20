<template>
  <div id="slide" :class="className">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.img" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'slide',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    swiperOption: {
      type: Object,
      default () {
        return {
          // autoplay: true,
          autoplay: {
            delay: 2000
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #slide {
    width: 100%;
  }
</style>
