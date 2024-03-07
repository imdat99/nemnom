<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref, watch } from 'vue'
import type { Menu } from '../Types'
const menus = ref<Menu[]>([])
const activeTab = ref(0)
const swiperRef = ref<typeof Swiper>()
onMounted(() => {
  fetch('http://localhost:8080/wp-content/menu/nemnem.json').then((r) =>
    r.json().then((res) => {
      menus.value = res
    })
  )
})
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper
}
const onSlideChange = (swiper: any) => {
  activeTab.value = swiper.activeIndex
}
watch(activeTab, () => {
  if (swiperRef.value) {
    swiperRef.value!.slideTo(activeTab.value)
  }
})
</script>

<template>
  <main class="container section-padding">
    <div>
      <ul class="menu">
        <li
          v-for="(menu, index) in menus"
          :key="menu.name"
          :class="{ active: index === activeTab }"
          @click="activeTab = index"
        >
          <h5 class="txt-center">{{ menu.name }}</h5>
        </li>
      </ul>
    </div>
    <div>
      <swiper
        :slides-per-view="1"
        :initial-slide="activeTab"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in menus" :key="index"> {{ item }}</swiper-slide>
      </swiper>
    </div>
  </main>
</template>
<style scoped lang="scss">
.container {
  max-width: 1200px;
  padding-inline: 15px;
}
.menu {
  position: relative;
  display: flex;
  width: 100%;
  padding: 0;
  justify-content: space-between;
  li {
    transition: all 0.5s ease;
    &.active {
      &::after {
        background: #414141;
      }
      h5 {
        color: var(--color-gold);
      }
    }
    &::after {
      content: '';
      display: block;
      margin-top: 8px;
      left: 0;
      right: 0;
      height: 3px;
      background: transparent;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
    }
    &:hover {
      &::after {
        background-color: #414141;
      }
      cursor: pointer;
    }
    padding: 10px 20px;
    h5 {
      font-family: var(--font-body) !important;
      max-width: 130px;
      word-break: break-all;
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    height: 3px;
    left: 0;
    right: 0;
    border-top: 1px solid #414141;
    border-bottom: 1px solid #414141;
  }
}
</style>
