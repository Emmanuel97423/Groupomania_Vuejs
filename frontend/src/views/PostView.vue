<template>
<div>
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
        @click=back() >
          Retour
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
  <v-container
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 1"
          :key="n"
          class="col-2"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
              <leftMenu></leftMenu>
          </v-card>
        </v-col>
             <v-col
          v-for="n in 1"
          :key="n"
          class="col-8"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
             <PostComponent></PostComponent>
             
          </v-card>
        </v-col>
             <v-col
          v-for="n in 1"
          :key="n"
          id="col-3"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <chat></chat>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
     
    
 
</div>

</template>

<script>

import PostComponent from '../components/Post.vue';
import leftMenu from '../components/feedComponents/FeedLeftMenu';
import chat from '../components/feedComponents/FeedRightChat';
export default {
    name:"PostView",
    components : {
        PostComponent,
        leftMenu,
        chat,

    },
    data : () => ({
      alignments: [
                'start',
                 ],
    }),

    methods: {
      back() {
        this.$router.push({ path: '/home'})
      }
    },

    beforeMount(){
        const localStorageToken = localStorage.getItem('token')
        if(!localStorageToken) {
        this.$router.push({ path: '/login' })
    }
    }
    
}
</script>

<style lang="scss" scoped>
          .btn-top-menu {
    text-decoration: none;
    color:white;    
  }
</style>