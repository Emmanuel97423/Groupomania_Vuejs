<template>

  <div>
        
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
         
          class="col-2"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <FeedLeftMenu></FeedLeftMenu>
          </v-card>
        </v-col>
             <v-col
        
          class="col-8"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <FeedCard class="feedCard"></FeedCard>
             
          </v-card>
        </v-col>
             <v-col
        
          id="col-3"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
           <!-- <FeedRightChat></FeedRightChat> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>


    
    
  </div>
</template>

<script>
import FeedCard from "../components/feedComponents/FeedCard.vue"
import FeedLeftMenu from "../components/feedComponents/FeedLeftMenu.vue"
//import FeedRightChat from "../components/feedComponents/FeedRightChat.vue"
export default {
    name:'Feed',
    components: {
        FeedCard,
        FeedLeftMenu,
        //FeedRightChat,
    },
    data() {
      
        return {
            status:  { 
                  feed: { hide: true },
            },
            msg: 'Mon feed',
            alignments: [
                'start',
                 ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .col-1 {
        background-color: red;
    }

</style>