<template>
  <div id="Login">
      <img v-bind:src=" logoImageUrl" alt="Groupomania_logo">
      
      <h1>Login page {{ message }} </h1>
      
  </div>
</template>

<script>
export default {
    name: 'Login',
     data () {
        return {
            message: 'Groupomania',
            logoImageUrl: './img/icon-left-font-monochrome-black.png'
        }
    },

       
}
</script>

<style>

</style>