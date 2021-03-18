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
                <a href="#">Mot de passe oublié?</a>
        </div>
        </div>
        <button id="signin--btn">Se connecter</button>
      
  </div>
</template>

<script>
export default {
    name: 'LoginHome',

}
</script>

<style>

</style>