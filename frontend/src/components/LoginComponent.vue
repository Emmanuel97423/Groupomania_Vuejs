<template>
  <div id="form">
      <div id="username">
          <input type="text" placeholder="Votre nom ou Email">
      </div>
        <div id="password">
            <input type="password" placeholder="Password">
        </div>
        <div id="options">
            <div id="remenber-me">
                <input type="checkbox">
                <label for="remenber-me">Se souvenir de moi ?</label>
            </div>
            <div id="forgot-password">
                <a href="#">Mot de passe oublié ?</a>
            </div>
            <div id="signup">
                <a href="#">Créer un compte</a>
            </div>
        </div>
        
    <ButtonLogin></ButtonLogin>
        
      
  </div>
</template>

<script>
import ButtonLogin from './buttons/ButtonLogin.vue';
export default {
    name: 'LoginHome',
    components: {
        ButtonLogin
    }

}
</script>

<style lang="scss" scoped>
    input {
        padding:10px 10px;
        margin:10px 0;
    }
    label {
        font-size:14px;
        margin: 0 10px;
    }
    a {
        
        font-size:14px;
        color: #a8a8a8;
    }
    #signup {
        margin:10px 0;
    }
</style>