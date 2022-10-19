<template>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png" />
  <div v-for="(item, i) in products" :key="i">
    <h4>{{ item.label }}</h4>
    <p>{{ item.price }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus: ['Home', 'Products', 'About'],
      products: [
        { label: '약정(무료)', price: 0 },
        { label: '약정(유료)', price: 1000000 },
        { label: '약정(무상)', price: 0 }
      ]
    }
  },
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
