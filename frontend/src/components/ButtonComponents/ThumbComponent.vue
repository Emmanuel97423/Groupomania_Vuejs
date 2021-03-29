<template>
  <div>
   
       <v-btn
        class="ma-2"
        text
        icon
        color="blue lighten-2"
      >
          
        <v-icon @click="userLike">mdi-thumb-up</v-icon>
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
</template>

<script>
import axios from 'axios';
export default {
    name: 'thumb',
    props:['post'],
    data: () => ({
        liked:1,
    }),
    methods: {
        userLike() {
            const LocalStorageUserId = localStorage.getItem('userId')
            const data = {
                id:this.post.id,
                like : this.liked,
                userId:LocalStorageUserId,
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
        }
    }  
}
</script>

<style>

</style>