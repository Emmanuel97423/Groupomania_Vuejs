<template>
<div class="container">
        <img src="@/assets/icon-left-font-monochrome-black.png" alt="Groupomania_logo" height="60px">
        <v-text class="font-weight-black">Connexion</v-text>
        <v-card
      class="d-flex justify-center mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
      
    >
   
      <v-card
        v-for="n in 1"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
              <form>

    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Mot de passe"
            hint="Au moins 8 caractères"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      Se Connecter
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
    
  </form>
      </v-card>
    </v-card>
    <router-link class="account-link" to="/">Créer un compte ?</router-link>

</div>

</template>




<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import UserDataService from "@/services/UserDataService"

  export default {
    name: 'LoginComponent' ,
    mixins: [validationMixin],

    validations: {
      
      email: { required, email },
      password: { required,},
      
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
       
        id:null,
        email: '',
        password:'',
        isSuperAdmin: false,
      

      show1: false,

        rules: {
          required: value => !!value || 'Email requis.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
    }),

    computed: {


      nameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.maxLength && errors.push('Le nom doit comporter au maximum 10 caractères')
        !this.$v.firstName.required && errors.push('Un nom est requis.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Email invalide')
        !this.$v.email.required && errors.push('E-mail requis')
        return errors
      },
    },

    methods: {
      submit (e) {
        
        e.preventDefault()
        this.$v.$touch()
        let data = {
          
          email: this.email,
          password: this.password,
        };
        UserDataService.login(data).then(response =>{
          const token = response.data.token
          this.id = response.data.id; 
          localStorage.setItem('userId', response.data.userId)
          localStorage.setItem('token', response.data.token)

          return token
          
        }).then(() =>{
          const tokenLocalStorage = localStorage.getItem('token');
            if(!tokenLocalStorage == this.token) {
              
          console.log("Vous n'avez pas accès");
          this.$router.push('/')
        } else {
          this.$router.push('Home')
        }
        })
        
        .catch(error => {
          alert("Vérifiez vos identifiants")
          console.log(error)
        });
        
      
        
      },
      clear () {
        this.$v.$reset()
        
        this.user.email = ''
        this.user.password = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style scoped>
    form {
        width: 300px;
     
    }
    .container {
        display: flex;
        flex-direction: column;
        gap:20px;
    }
    .account-link {
     
        color: #a3a3a3;
        margin: -20px 0;
        align-self:center;
    }
</style>