<template>
  <nav id="nav-home">
    <ul class="nav-list">
      <li class="item" v-for="item in navData" :key="item.href">
        <a :href="item.href">
          <span></span>
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Slide from 'components/base/slide'
export default {
  name: 'navHome',
  components: {
    Slide
  },
  data: function () {
    return {
      // swiperOption: {
      //   slidesPerView: 4,
      //   slidesPerColumn: 2,
      //   spaceBetween: 30,
      //   pagination: {
      //     clickable: true
      //   }
      // },
      navData: [
        {href: '1', img: '', title: '住家保姆'},
        {href: '2', img: '', title: '不住家保姆'},
        {href: '3', img: '', title: '月嫂'},
        {href: '4', img: '', title: '育儿嫂'},
        {href: '5', img: '', title: '小时工'},
        {href: '6', img: '', title: '护工'},
        {href: '7', img: '', title: '家电维修'},
        {href: '8', img: '', title: '家电清洗'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'scss/element.scss';
  #nav-home {
    padding: 10px 0;
    .nav-list {
      @include list(row);
      .item {
        padding: 10px 0;
        text-align: center;
        width: 25%;
        font-size: 30px;
        a {
          display: block;
          span {
            display: inline-block;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #3cb7e3;
          }
          p {
            @include ellipsis();
          }
        }
      }
    }
  }
</style>
