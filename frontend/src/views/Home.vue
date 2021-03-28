<template>
  <div class="home">
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


      <v-btn text >
        <router-link to ="/about" class='btn-top-menu'>About</router-link>
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
  
    <div v-if="status.hide=true" id="feed">
       <Feed></Feed>
    </div>
         <v-overlay
        :z-index="zIndex"
        :value="overlay"
    >
    <form  >
    <v-card
    class="mx-auto"
    max-width="700"
    height="760"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Poster un article</v-card-title>
    </v-img>

   <v-textarea
      counter
      label="Titre"
      :rules="inputTitle.rules"
      :value="value"
      class="ma-4"
      height= "90px"
      v-model="post.title"
    ></v-textarea>
     <v-textarea
      counter
      label="Text"
      :rules="rules"
      :value="value"
      class="ma-4"
      v-model="post.content"
    ></v-textarea>

    <v-card-actions>
 
         <v-btn
          class="white--text"
          color="teal"
          @click="sendingPost" enctype="multipart/form-data"
      >
            Envoyer
      </v-btn>
         <v-btn
          class="white--text"
          color="grey"
          @click="overlay = false"
      >
            Annuler
      </v-btn>
      
    </v-card-actions>
  </v-card>
    </form>
    </v-overlay>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import Feed from '@/components/Feed.vue';
import PostDataService from'@/services/PostDataService'

export default {
  name: 'Home',
  components: {
    Feed,  
  },
  data: () => ({
      post: [
        {
          id:null,
          title:"" ,
          description:"",
          content:"",
          imageUrl:"",
      }
      ],

      status: [
        { hide: true, }
      ],
      overlay: false,
      zIndex: 0, 
      inputTitle: {
        rules: [v => v.length <= 25 || 'Max 25 caractères']
      },
      rules: [v => v.length <= 5000 || 'Max 5000 caractères'],
      imageInputRules: [value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!'],
      value: 'Ecrivez ici...', 
      selectedfile: null,
  
  }),
  methods: {
 
    SendPost(){
        this.overlay = true
    },
    sendingPost () {
      const userIdLocalStorage = localStorage.getItem('userId')
             
        console.log('userIdLocalStorage:', userIdLocalStorage)
      let data = {
          title:this.post.title ,
          description:this.post.description,
          content:this.post.content,
          userId: userIdLocalStorage,
          
      };
      PostDataService.sendingPost(data).then(response => {
        this.id = response.data.id;
      }).then(() => {
        this.$router.push({ path: '/home' })
      })
      .catch(error => {console.log(error)})
      this.overlay = false;
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
<style lang='scss' scoped>
      .btn-top-menu {
    text-decoration: none;
    color:white;    
  }

  #feed{
    width: 100%
  }
</style>