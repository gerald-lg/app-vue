<template>
    <div class="d-flex flex-column align-center">
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
    methods: {
        
    }
}
</script>