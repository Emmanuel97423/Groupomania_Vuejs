<template>

  <div>

      <v-card 
    class="mx-auto my-12"
    width="100%"
    
  >
  <h2>{{ post.title }}</h2>
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
        <em>Posté par •</em> {{ userFirstName }}
      </div>

      <div>{{ post.content }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    


    <v-card-actions class="d-flex justify-space-between">
 
     
            <v-btn
        color="teal lighten-2"
        text
        
      >
        Modifier

      </v-btn>
            <v-btn
            v-if="adminPost"
        color="teal lighten-2"
        text
        @click="deletePost" 
      >
        Supprimer
      </v-btn>
     
    <div>
      <v-btn
        class="ma-2"
        text
        icon
        color="blue lighten-2"
      >
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        text
        icon
        color="red lighten-2"
      >
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>
    </div>
    </v-card-actions>
    </v-card>
      
    

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios'


export default {
    name: 'PostComponent',
    data: () => ({
          post: {},
          loading: false,
          selection: 1,
          display: false,
          overlay: false,
          adminPost: false,
          }),
    methods: {
      //Get un post
      getPost(){ 
        const queryString = this.$route.params;     
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get("id");     
          axios
          .get("http://localhost:3000/api/post/" + id)
          .then((response) => 
          this.post = response.data
          ).then(()=>{
            const localStorageUserId = localStorage.getItem('userId');
            console.log("userId: " + this.post.userId);
             console.log("LocalStorageuserId: " + localStorageUserId)
                if(this.post.userId ==  localStorageUserId) {
              this.adminPost = true;
            } else { this.adminPost = false;}
            
          })
        .catch((error) => console.log(error));
          },

   
       //Supprimer un post
         deletePost(){ 
        const queryString = this.$route.params;
        console.log('queryString:', queryString)
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get("id");
        console.log("id:" + id)
          axios
          .delete("http://localhost:3000/api/post/" + id)
          .then((response) => 
          console.log("Objet supprimé: " + response.data)
          ).then(() =>  {
            this.$router.push({ path: '/home' })
          })
        .catch((error) => console.log(error));
          }   
    },

    computed: {
        ...mapGetters(["post"])
    },
    beforeMount() {
         this.getPost()
      
   
        //this.$store.dispatch('getOnePost') 


      },
}
</script>

<style lang="scss" scoped>
    .container {
        width: 50%
    }
</style>