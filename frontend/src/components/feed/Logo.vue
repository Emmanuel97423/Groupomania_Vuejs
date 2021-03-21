<template>
  <div id="container">
      <img src="@/assets/icon-left-font-monochrome-black-icon.png" alt="Groupomania_logo" height="50px">
      <input type="text" placeholder="Rechercher sur Groupomania"> 
    
  </div>
</template>

<script>
export default {
    name : "logo-search",

}
</script>

<style lang="scss" scoped>
    #container {
        display:flex;
        align-items:center;
        gap: 10px; 
    }
    input {
        height: 30%;
        padding: 5px 35px;
        border-radius: 30px;
    }   
</style>