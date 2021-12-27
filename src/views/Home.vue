<template>
    <div class="d-flex flex-column align-center my-10">
        <!-- todo: colocar imagen de fondo -->
        <div class="" style="text-decoration: underline #847ae1; font-size: 20px ">
            <h1> BIENVENIDO </h1>
        </div>

        <div>
            <v-btn
            block
            class="px-6 my-4 white--text"
            color="#434b63"
            @click="logOut"
            >
            LOG OUT
            </v-btn>

        </div>
    </div>
</template>

<script>
export default({
    name:"Home",
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push('/');
        }
    },
    methods: {
        logOut(){
            this.$store.dispatch('logout');
            this.$router.push('/');
        }
    
    }
    
})
</script>
