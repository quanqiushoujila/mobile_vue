<template>
  <section id="kSlide">
    <slide :class-name="className" :items="slideData"></slide>
  </section>
</template>

<script>
import slide from 'components/base/slide'
export default {
  name: 'kSlide',
  components: {
    slide
  },
  data: function () {
    return {
      className: '',
      slideData: [
        {
          href: '1',
          img: '//m.51baomu.cn/image/banner2.jpg'
        },
        {
          href: '2',
          img: '//m.51baomu.cn/image/10zhounianbanner.jpg'
        },
        {
          href: '3',
          img: '//m.51baomu.cn/image/bannerguomei.jpg'
        },
        {
          href: '4',
          img: '//m.51baomu.cn/image/bannerBaoxian.jpg'
        }
      ]
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
  #kSlide {
    width: 100%;
  }
</style>
