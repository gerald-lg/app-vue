<template>
    <div>
        <div v-for="project in projects" :key="project.id">
            <Post 
            v-bind:userId="project.userId"
            v-bind:id="project.id"
            v-bind:title="project.title"
            v-bind:body="project.body"
            v-bind:status="getStatus()"
            v-bind:amount="getAmount()"
               />
        </div>
    </div>
</template>

<script>
import service from '../logic/services.js'
import Post from '../components/Post.vue'
export default({
    name: "Projects",
    data(){
        return{
            projects: []
        }
    },
    components:{
        Post
    },
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push('/');
        }
        //ver si se puede obtener de otra forma
        if(this.$store.getters.isLoggedIn){
            try {
                this.projects = await (await service.getPosts()).data;
            } catch (Error) {
                console.log(Error);
            }
        }
    },
    methods: {
        //metodo que genera un numero al azar entre 0 y 1
        getStatus(){
            const status = Math.floor(Math.random() * 2) == 1 ? true : false;
            return status
        },
        //metodo que genera un monto al azar entre 1.000.000 y 15.000.000
        getAmount(){
            return Math.floor((Math.random() * (15000000-1000000)) + 1000000);
        }
    }
})
</script>
