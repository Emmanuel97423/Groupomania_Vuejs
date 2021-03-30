<template>
  <div>
        
       <v-btn
        class="ma-2"
        text
        icon
        color="blue lighten-2"
        :disabled=false
      >
          
        <p v-if = "likeCounter > 0" >{{ likeCounter }}</p><v-icon  @click="userLike" >mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        text
        icon
        color="red lighten-2"
      >
        <p v-if = "dislikeCounter > 0" > {{ dislikeCounter }}</p><v-icon   @click="userDislike">mdi-thumb-down</v-icon>
      </v-btn>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'thumb',
    props:['post'],
    data: () => ({
        disliked: 1,
        liked:1,
        disabled:"",
        likeCounter:"",
        dislikeCounter:""
        
    }),
    methods: {

      //LIKE
        userLike() {
            const LocalStorageUserId = localStorage.getItem('userId')
            const data = {
                id:this.post.id,
                like : this.liked,
                userId:LocalStorageUserId,
                postId: this.post.id
            }
            console.log(data)
            const queryString = this.$route.params;     
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get("id");     
            axios
            .post("http://localhost:3000/api/like/" + id, data)
            .then(() => 
            console.log("liké")
            ).then(()=>{
                console.log('data:', data)
                
            })
            .catch((error) => console.log(error));
        },
        likeCount(){
          const queryString = this.$route.params;     
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get("id");  
          axios
            .get("http://localhost:3000/api/like/" + id)
            .then((response) => 
           this.likeCounter =  response.data.count 

            )
            .catch((error) => console.log(error));
        },
        //DISLIKE
           userDislike() {
            const LocalStorageUserId = localStorage.getItem('userId')
            const data = {
                id:this.post.id,
                like : this.disliked,
                userId:LocalStorageUserId,
                postId: this.post.id
            }
            console.log(data)
            const queryString = this.$route.params;     
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get("id");     
            axios
            .post("http://localhost:3000/api/dislike/" + id, data)
            .then(() => 
            console.log("disliké")
            ).then(()=>{
                console.log('data:', data)
                
            })
            .catch((error) => console.log(error));
        },
               dislikeCount(){
          const queryString = this.$route.params;     
            const urlParams = new URLSearchParams(queryString);
            const id = urlParams.get("id");  
          axios
            .get("http://localhost:3000/api/dislike/" + id)
            .then((response) => 
           this.dislikeCounter =  response.data.count 

            )
            .catch((error) => console.log(error));
        },
    },
    beforeMount() {
      this.likeCount()
      this.dislikeCount()
    }
}
</script>

<style>

</style>