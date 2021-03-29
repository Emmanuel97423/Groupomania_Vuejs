<template>


<div>
  <v-card 
   v-for="post in posts.slice().reverse()" :key="post.id"
    class="mx-auto my-12"
    width="100%"
    
  >
  <h2>{{ post.title }} i: {{ post.id }}</h2>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>


    <v-card-title ></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="my-4 subtitle-1">
        <em>Posté par •</em> Jhon Doe
      </div>

      <p class="content-text">{{ post.content }}</p>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    


    <v-card-actions class="d-flex justify-space-between">
      <v-btn
        color="teal lighten-2"
        text
       :to="{ name: 'Post', params: { id: post.id}}"
      >
       Lire
      </v-btn>
   
     
    <div>
 
    </div>
    </v-card-actions>
    <v-overlay
    
        :z-index="zIndex"
        :value="overlay"
    >
  
    <v-card
    class="mx-auto"
    max-width="700"
    height="460"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ post.title }}</v-card-title>
      
    </v-img>

  <p class="text-justify">
    {{ post.content }}
  </p>

    <v-card-actions>
 

         <v-btn
          class="white--text"
          color="grey"
          @click="overlay = false"
      >
            Fermer
      </v-btn>
      
    </v-card-actions>
  </v-card>
    
    </v-overlay>
  </v-card>
    
  </div>
  
</template>

<script>
import { mapGetters } from "vuex";

  export default {
    name: 'FeedCard',  
    data: () => ({
      loading: false,
      selection: 1,
      display: false,
      overlay: false,
    }),
    methods: {
      onePost () {
        this.$store.dispatch('getOnePost')
        //this.$router.push({path: 'post'})
      },
      read(){
        this.overlay = true;
      },
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
      deletePost () {
        //console.log(this.$route.query)
          this.$store.dispatch('deletePost')
      }
    },
    computed: {
        ...mapGetters(["posts"])
    },
    mounted() {
        this.$store.dispatch('getPosts')
      },
  }
</script>

<style lang="scss" scoped>
  .content-text {
  max-height:500px;   
  text-overflow: ellipsis; 
  overflow: hidden;
  white-space: nowrap; 
}
.btn {
  text-transform: Uppercase;
  text-decoration: none;
  color: teal;
}
  
 v-card {
     width:100%
 }
</style>