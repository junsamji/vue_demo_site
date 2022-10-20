<template>
  <div class="black-bg" v-if="modal">
    <div class="white-bg">
      <h4>상세</h4>
      <p>상세내용</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <div v-for="item in products" :key="item.id">
    <img :src="item.image" class="item-img" @click="modal = true" />
    <h4>{{ item.label }}</h4>
    <p>{{ item.price }}</p>
    <button @click="item.joiner++">♥</button
    ><span> 좋아요 : {{ item.joiner }}</span>
  </div>
</template>

<script>
import _products from './assets/products'

export default {
  name: 'App',
  data() {
    return {
      menus: ['Home', 'Shop', 'About'],
      modal: false,
      products: _products
    }
  },
  methods: {},
  components: {}
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.item-img {
  width: 30%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 10px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
