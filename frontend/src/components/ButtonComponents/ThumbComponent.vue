<template>
  <div>
        
       <v-btn
        class="ma-2"
        text
        icon
        color="blue lighten-2"
        :disabled=false
      >
          
        <p>{{ likeCounter }}</p><v-icon v-bind="liked = 1" @click="userLike" >mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        text
        icon
        color="red lighten-2"
      >
        <p>1</p><v-icon  >mdi-thumb-down</v-icon>
      </v-btn>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'thumb',
    props:['post'],
    data: () => ({
        liked:"",
        disabled:"",
        likeCounter:"",
        
    }),
    methods: {
        userLike() {
            const LocalStorageUserId = localStorage.getItem('userId')
            const data = {
                id:this.post.id,
                like : this.liked,
                userId:LocalStorageUserId,
                postId: this.post.id
            }
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
        }
            
    },
    beforeMount() {
      this.likeCount()
    }
}
</script>

<style>

</style>