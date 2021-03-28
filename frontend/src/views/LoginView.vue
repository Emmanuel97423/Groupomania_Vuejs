<template >
<div class="container">
    
      <LoginComponent></LoginComponent>
</div>

</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'

export default {
    name:'LoginForm',
    components: {
        LoginComponent,
    }

}
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }</style>