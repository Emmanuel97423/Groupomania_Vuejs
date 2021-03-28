<template>
<div class="container">
        <img src="@/assets/icon-left-font-monochrome-black.png" alt="Groupomania_logo" height="60px">
        
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
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
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
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
    
  </form>
      </v-card>
    </v-card>
    <router-link class="account-link" to="/login">Vous avez un compte ?</router-link>

</div>

</template>




<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import UserDataService from "@/services/UserDataService"

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      password: { required },
     
    },

    data: () => ({
      id:null,
      name: '',
      email: '',
      password:'',
      show1: false,
      rules: {
          required: value => !!value || 'Email requis.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
    }),

    methods: {
      submit (e) {
        e.preventDefault()
        this.$v.$touch()
        let data = {
          firstName: this.name,
          email: this.email,
          password: this.password,
        };
        if(this.errors) {
            console.error("Errorname")
        } else {
              UserDataService.signup(data).then(response =>{
          this.id = response.data.id;
          console.log(response.data);
          this.$router.push({path:"/login"})
        }).catch(error => {
          console.log(error)
        })
        }
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
       
        
      },
    },
    computed: {
 
  
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
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