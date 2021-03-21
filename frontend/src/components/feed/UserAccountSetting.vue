<template>
  <div id = "app">
    <div id = "avatar">
      <img src="#" alt="avatar">
      //Pseudo
    </div>
    <div id = "setting">
        <font-awesome-icon icon="plus" class="font-awesome-icon"/>
        <font-awesome-icon icon="plus" class="font-awesome-icon"/>
        <font-awesome-icon icon="plus" class="font-awesome-icon"/>
        <font-awesome-icon icon="plus" class="font-awesome-icon"/>

    </div>
  </div>
</template>

<script>
export default {
    name: 'UserAccountSetting',

}
</script>

<style lang="scss" scoped>
    #app {
        display: flex;
        justify-content:flex-end;
        gap: 30px;
        
    }
    #avatar {
        display: flex;
    }
    #setting {
        display: flex;
        justify-content:space-between;
        gap: 15px;
    }
    .font-awesome-icon {
        cursor: pointer;
    }
</style>