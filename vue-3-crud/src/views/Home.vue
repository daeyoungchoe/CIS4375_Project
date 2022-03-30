<template>
  <div class="home">
    <img alt="bread" src="../assets/bread.jpg" width="300" height="300">
    <HelloWorld msg="Welcome to Your Bread of Life application"/>
  </div>
</template>

<script>
// @ is an alias to /src
import homePage from '@/components/homePage.vue'

export default {
  name: 'Home',
  components: {
    homePage
  }
}
</script>
