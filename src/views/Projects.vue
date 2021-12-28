<template>
    <div class="background d-flex flex-column">
        
        <div class="mt-5 mx-auto">
            <v-select :items="amount"
            label="Filtrar por:"
            solo
            @change="filtro($event)"
            >
            </v-select>
        </div>

        <div class="d-flex flex-row flex-wrap justify-center">
            <v-card v-for="project in projects" 
            :key="project.id" 
            width="20%"
            align="center"
            class="mx-2 my-2 rounded-lg"
            height="500px"
            >
                <Post 
                :userId="project.userId"
                :id="project.id"
                :title="project.title"
                :body="project.body"
                :status="project.status"
                :amount="project.amount"
                />
            </v-card>
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
            projects: [],
            amount: ['Todos', '1M a 5M', '5M a 10M'], 
        }
    },
    components:{
        Post
    },
    async created() {
        if (!this.$store.getters.isLoggedIn) {
            this.$router.push('/');
        }
        //se obtienen los datos desde la api
        if(this.$store.getters.isLoggedIn){
            try {
                this.projects = await (await service.getPosts()).data;
                //se agregan los nuevos atributos
                var state = this.projects.map(project => project.state = this.getStatus())
                var amounts = this.projects.map(project => project.amount = this.getAmount())
                this.projects = {...this.projects, amounts, state};
            } catch (Error) {
                console.log(Error);
            }
        }
    },
    methods: {
        //metodo que genera un numero al azar entre 0 y 1
        getStatus(){
            var status = Math.floor(Math.random() * 2) == 1 ? true : false;
            return status
        },
        //metodo que genera un monto al azar entre 1.000.000 y 15.000.000
        getAmount(){
            var amount = Math.floor((Math.random() * (15000000-1000000)) + 1000000);
            return amount;
        },
        //TODO: REALIZAR FILTRO
        filtro(event){
            if(event === "1M a 5M"){
                // const filterArray = this.projects.filter(
                //     project => (project.amount >= 1000000 && project.amount < 5000000)
                // );
                // console.log(filterArray);
            }
            else if(event === "5M a 10M"){
                console.log(event);
                
            }
            else{
                console.log(event)
            }

        }
    }
})
</script>

<style>
    body, html {
  height: 100%;
  margin: 0;
}

.background {
  /* The image used */
  background-image: url("../assets/background.jpg");

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
