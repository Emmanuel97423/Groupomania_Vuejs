<script>
//import HomeLink from './components/HomeLink.vue';
import Login from './components/Login.vue'

export default {
        name: 'App',
        components: {
                
                Login,
        }
}
</script>

<template>
        <div id="app">
                <img src="./assets/icon-left-font-monochrome-black.png" alt="goupomania_logo" height="500px">
                <Login></Login>
              
        </div>
</template>