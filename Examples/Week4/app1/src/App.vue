<template>
  <div id="app">

    <div><img src="./assets/logo.jpg"></div>

    <div class="menu-bar">
        <span class="menu-item" v-on:click='goToHome'>Home</span>
        <span class="menu-item" v-on:click='goToRegistration'>Registration</span>
        <span class="menu-item" v-on:click='goToProducts'>Products</span>
    </div>

    <router-view/>

  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      goToHome: function() {
        this.$router.push({ path: 'home' })
      },
      goToRegistration: function() {
        this.$router.push({ path: 'registration' })
      },
      goToProducts: function() {
        this.$router.push({ path: 'products' })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;
  }

  .menu-item {
      margin-right: 10px;
      padding: 5px;
  }

  .menu-bar {
      background-color: cyan;
      height: 40px;
      margin-top: 10px;
      vertical-align: middle;
      padding-top: 20px;
      width: 50%;
  }
</style>
