<template>
    <div id="Signup">
      <nav id="nav">
             <router-link to="/feed">Feed</router-link> |
            <router-link to="/about">A propos</router-link>
      </nav> 
      <img src="@/assets/icon-left-font-monochrome-black.png" alt="Groupomania_logo" height="150px">
    
      <h1>{{ message }} </h1>
      <div>
          <SignupComponent></SignupComponent>
      </div>
       
  </div>
 

</template>

<script>
import SignupComponent from "../components/SignupComponent.vue"

export default {
    name: 'Signup',
    component: {
        SignupComponent,
    },
        data () {
        return {
            message: "Créer vous un compte"
        }
    }
}
</script>

<style>

</style>