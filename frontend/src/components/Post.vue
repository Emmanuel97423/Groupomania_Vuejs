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
       height="140"
      width="750"
      src="@/assets/icon-left-font-monochrome-black.png"
    ></v-img>


    <v-card-title ></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

     <!-- <div class="my-4 subtitle-1">
        <em>Posté par •</em> {{ userFirstName }}
      </div>-->

      <div>{{ post.content }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    


    <v-card-actions class="d-flex justify-space-between">
 
     

            <v-btn
            v-if="adminPost"
        color="teal lighten-2"
        text
        @click="deletePost" 
      >
        Supprimer
      </v-btn>
     
    <div>
      
      <thumb v-bind:post="post"></thumb>
    </div>
    </v-card-actions>
    </v-card>
      
    

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios'
import thumb from '@/components/ButtonComponents/ThumbComponent'


export default {
    name: 'PostComponent',
    components: {
      thumb,
    },
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
             alert("Votre article à été supprimé")
            this.$router.push({ path: '/home' })
          })
        .catch((error) => console.log(error));
          },
          superAdmin(){
            const localStorageUserId = localStorage.getItem('userId');
            axios.get("http://localhost:3000/api/user/" + localStorageUserId).then((response) =>
      
      this.adminPost = response.data.isSuperAdmin
      )
       
      .catch((error) => console.log(error))
          }
    },

    computed: {
        ...mapGetters(["post"])
    },
    beforeMount() {
         this.getPost()
         this.superAdmin()
      
   
        //this.$store.dispatch('getOnePost') 


      },
}
</script>

<style lang="scss" scoped>
    .container {
        width: 50%
    }
</style>