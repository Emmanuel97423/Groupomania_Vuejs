<template>
    <div id="div--btn">
        <button id="btn">{{ buttonLabel }}</button>
    </div>
</template>

<script>
export default {
    name: "ButtonSignup",
    data() {
        return {
            buttonLabel : "Créer un compte"
    }
        }
}
</script>

<style lang="scss" scoped>
    button {
        padding: 10px 50px;
        margin: 1rem 0;
        background-color: #2c3e50;
        color: #fff;
        border-radius: 20px;
        border: 0;
        cursor: pointer;
    }
</style>