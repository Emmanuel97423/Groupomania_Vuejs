<template >
<div class="container">
    
      <SignupFormComponent></SignupFormComponent>
</div>

</template>

<script>
import SignupFormComponent from '../components/signupComponents/SignupFormComponent.vue'

export default {
    name:'SignupForm',
    components: {
        SignupFormComponent,
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