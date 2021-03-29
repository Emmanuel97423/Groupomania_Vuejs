<template>
        <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Groupomania Logo"
          class="shrink mr-2"
          contain
          src="@/assets/icon-left-font-monochrome-white-logo.png"
          transition="scale-transition"
          width="45"
        />

        <v-img
          alt="Groupomania Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/icon-left-font-monochrome-white.png"
          width="170"
        />
      </div>
      <v-spacer></v-spacer>

      <v-btn   
        class="white--text"
        color="teal"
        @click=SendPost() >
          Poster une publication
      </v-btn>


 
       <!--<v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>
</template>
<script>

    export default {
        name: 'navBar',
        
    }

</script>

<style lang="scss" scoped>
          .btn-top-menu {
    text-decoration: none;
    color:white;    
  }
</style>