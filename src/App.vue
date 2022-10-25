<template>
  <div class="black-bg" v-if="modal">
    <div class="white-bg">
      <h4>{{ modal_data.label }}</h4>
      <img :src="modal_data.image" />
      <p>{{ modal_data.description }}</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <div v-for="item in products" :key="item.id">
    <img :src="item.image" class="item-img" @click="clickImg(item)" />
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
      products: _products,
      modal_data: {}
    }
  },
  methods: {
    clickImg(selectItem) {
      this.modal_data = selectItem
      this.modal = true
    }
  },
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
  margin-top: 50px;
  padding: 20px;
}

.item-img {
  cursor: pointer;
  padding-top: 15px;
  width: 20%;
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
  width: 100%;
  position: fixed;
  top: 0;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
