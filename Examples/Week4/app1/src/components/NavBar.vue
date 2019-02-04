<template>
    <div class="menu-bar">
        <span class="menu-item" v-on:click='goToHome'>Home</span>
        <span class="menu-item" v-on:click='goToRegistration'>Registration</span>
        <span class="menu-item" v-on:click='goToProducts'>Products</span>
    </div>
</template>

<script>
  export default {
    name: 'NavBar',
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

<style scoped>
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