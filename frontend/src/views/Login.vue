<template>
  <div id="Login">
      <nav id="nav">
             <router-link to="/feed">Feed</router-link> |
            <router-link to="/about">A propos</router-link>
      </nav> 
      <img src="@/assets/icon-left-font-monochrome-black.png" alt="Groupomania_logo" height="150px">
    
      <h1>{{ message }} </h1>
      <div>
          <LoginHome></LoginHome>
      </div>
       
  </div>
 
</template>

<script>
import LoginHome from '../components/LoginHome.vue';
export default {
    name: 'Login',
    components: {
        LoginHome
    },
     data () {
        return {
            message: 'Vous faites partie de la famille ?',
            
        }
    },

       
}
</script>

<style lang="scss" scoped >
    #Login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>