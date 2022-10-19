<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h4>{{ products[0] }}</h4>
      <p>0</p>
      <h4>{{ products[1] }}</h4>
      <p>600000</p>
      <h4>{{ products[2] }}</h4>
      <p>0</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      products: ['약정(무료)', '약정(유료)', '약정(무상)'],
      prices: [600000, 1000000, 500000]
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
</style>
