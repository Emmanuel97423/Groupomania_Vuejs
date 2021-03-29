<template>
  <v-card
    
    class="mx-auto"
    width="100%"
    tile
  >
    <v-navigation-drawer permanent id= "left-menu" width="100%">
      <v-system-bar color="teal"></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ user.firstName }}
            </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
              <v-list-item-title class="text--secondary" v-text="item.avis" ></v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
          <v-list-item->
               <!-- <v-list-item-icon>
              <v-icon v-icon-text='mdi-account-arrow-right'></v-icon>
            </v-list-item-icon> -->

            <v-list-item-content>
                <v-btn
                depressed
                color="primary"
                @click="userDisconnect"
              >
                Se déconnecter
              </v-btn>
              <v-btn
                depressed
                color="error"
                @click="userDelete"
              >
                Supprimer profil
              </v-btn>
              
            </v-list-item-content>
          </v-list-item->
      
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'FeedLeftMenu',
    data: () => ({
      selectedItem: 0,
      user:{},
      items: [
        { text: 'Covid-19 - Informations', icon: 'mdi-needle' },
        { text: 'Evènements', icon: 'mdi-calendar-check' },
        { text: 'Favoris', icon: 'mdi-star' },
        { text: 'Compte', icon: 'mdi-account' },
        { text: 'Affichage et accéssibilité', icon: 'mdi-moon-waning-crescent' },
        { text: 'Donner votre avis', icon: 'mdi-message-draw',  avis:  'Aidez à améliorer le service' },
        
      ],
    }),

    methods: {
      getUserInfos() {
        
        const id = localStorage.getItem('userId')
              axios
          .get("http://localhost:3000/api/user/" + id)
          .then((response) => 
          
          this.user = response.data
          ).then(()=>{
            console.log(this.user);
            
            
          })
        .catch((error) => console.log(error));
      },
      userDisconnect() {
        localStorage.clear();
        this.$router.push('Login')
         alert("Vous êtes déconnecté")
      },
      userDelete() {
        const id = localStorage.getItem('userId')
         axios
          .delete("http://localhost:3000/api/user/" + id)
          .then((response) => 
          console.log("Objet supprimé: " + response.data)
          ).then(() =>  {
             alert("Votre compté a bien été supprimé")
            this.$router.push({ path: '/login' })
          })
        .catch((error) => console.log(error));
      }
    },
    beforeMount() {
      this.getUserInfos()
    }
  }
</script>

<style lang="scss" scoped>
    .avis {
        
        font-size:2px;

    }

</style>