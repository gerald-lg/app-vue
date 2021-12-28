<template>
    <div>
        <v-img
        class="rounded-lg"
        height="200px"
        width="100%"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        <!-- Titulo y cuerpo -->
        <div class="d-flex flex-column my-2">
            <v-card 
            flat
            class="text-uppercase overflow-hidden text-center text-truncate"
            max-height="70"
            style="text-decoration: underline #847ae1; 
            font-size: 20px"> {{this.title}}</v-card>
            <br>
            <v-card flat 
            width="250px" 
            height="125" 
            class="overflow-hidden text-justify mx-auto text-nowrap">{{this.body}}</v-card>
        </div>
        <!-- Boton ver -->
        <v-btn @click="getPost(id)" class="white--text font-weight-bold" width="250px" color="#d391af">VER</v-btn>

    </div>
</template>

<script>

export default ({
    name: 'Post',
    props: {
        userId: Number,
        id: Number,
        title: String,
        body: String,
        status: Boolean,
        amount: Number
    }, methods: {
        getPost(id){
            this.$router.push({
                path: "post/:id",
                query: {id}
            })
        }
    }
    
})
</script>
