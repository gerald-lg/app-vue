<template>
    <v-app> 
        <div class="d-flex flex-column align-center">
            <Form/>
        </div>
    </v-app>
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
    methods: {
        
    }
}
</script>