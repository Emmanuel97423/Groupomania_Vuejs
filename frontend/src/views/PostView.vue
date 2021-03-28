<template>
<div>
   <navBar></navBar>
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
import navBar from '@/components/nav/navBarComponent'
import PostComponent from '../components/Post.vue';
import leftMenu from '../components/feedComponents/FeedLeftMenu';
import chat from '../components/feedComponents/FeedRightChat';
export default {
    name:"PostView",
    components : {
        PostComponent,
        navBar,
        leftMenu,
        chat,

    },
    data : () => ({
      alignments: [
                'start',
                 ],
    }),

    beforeMount(){
        const localStorageToken = localStorage.getItem('token')
        if(!localStorageToken) {
        this.$router.push({ path: '/login' })
    }
    }
    
}
</script>

<style>

</style>