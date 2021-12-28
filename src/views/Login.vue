<template>
    <div class="d-flex flex-column align-center bg">
        <Form/>
    </div>
</template>

<script>
import Form from "../components/Form.vue"

export default {
    name: 'Login',
    data(){
        return {
            rutSend :'',
            passwordSend : '',
        }
    },
    components: {
        Form,
    },
    async created() {
        //si tiene info en el local storage, pasa directo a home.
        if (this.$store.getters.isLoggedIn) {
            this.$router.push('/home');
    }},
}
</script>

<style scoped>
    body, html {
  height: 100%;
  margin: 0;
}

.bg {
  /* The image used */
  background-image: url("../assets/background-login.jpg");

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>