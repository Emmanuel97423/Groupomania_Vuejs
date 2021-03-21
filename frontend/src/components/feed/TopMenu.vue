<template>
    <div id="app">
    <font-awesome-icon icon="home" class="font-awesome-icon"/>
    <font-awesome-icon icon="home" class="font-awesome-icon"/>
    <font-awesome-icon icon="home" class="font-awesome-icon"/>
    <font-awesome-icon icon="home" class="font-awesome-icon"/>    
  </div>
</template>

<script>
export default {
    name: 'topMenu',

}
</script>

<style lang="scss" scoped>
#app {
    display:flex;
    justify-content:center;
    align-items:center;
    gap:100px;

}
    .font-awesome-icon {
        font-size:30px;
      
        cursor: pointer;
    }
</style>