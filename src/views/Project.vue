<template>
    <div class="background">
        <v-row no-gutters>
            <!-- titulo y descripcion -->
            <v-col>
                <v-card-title class="text-uppercase 
                font-weight-bold 
                white--text
                text-justify"
                >
                    <h1>{{title}}</h1>
                </v-card-title>
                <v-spacer> </v-spacer>
                <v-card-text class="text-justify text-body-1">
                    {{body}}
                </v-card-text>
            </v-col>
            <!-- Imagen -->
            <div>
                 <v-img
                    class=""
                    height="100%"
                    width="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                </v-img>
            </div>
        </v-row>
       
    </div>
</template>

<script>
import service from '../logic/services.js'
export default ({
    name : 'project',
    data () {
        return {
            title: '',
            body: ''
        }
    },
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push('/');
    }},
    async mounted(){
        try {
            const id = this.$route.query.id;
            const request = await service.getPost(id);
            this.title = request.data.title;
            this.body = request.data.body;
            
        } catch (Error) {
            console.log(Error);
        }
    }
    
})
</script>
