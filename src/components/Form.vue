<template>
    <div class="my-5 pa-15 d-flex flex-column align-center">
      <!-- Icono y título -->
      <div>
        <v-img
          alt="lock-icon"
          class="my-2"
          contain
          src="../assets/lock-icon.png"
          transition="scale-transition"
          width="60px"
        />
      </div>

      <div style="text-decoration: underline #847ae1; font-size: 30px "> 
        INICIO DE SESIÓN
      </div>
      <!-- formulario -->
        <form action class="form" @submit.prevent="login">
            <v-text-field
            color="#847ae1"
            full-width
            v-model="rut"
            placeholder="Ej: 11111111-1"
            :error-messages="rutErrors"
            label="USUARIO"
            required
            @input="$v.rut.$touch()"
            @blur="$v.rut.$touch()"
            ></v-text-field>
            <v-text-field
            color="#847ae1"
            v-model="password"
            type="password"
            :error-messages="passwordErrors"
            label="CONTRASEÑA"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            ></v-text-field>
        
            <v-btn block
            class="my-4 white--text"
            color="#434b63"
            @click="login"
            >
            LOGIN
            </v-btn>
            
        </form>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength} from 'vuelidate/lib/validators'
  import service from '../logic/services.js'
  export default {
    name : 'Form',  
    mixins: [validationMixin],
    validations: {
      rut: { required, maxLength: maxLength(10), minLength: minLength(10) },
      password: {required}
    },
    data(){
      return {
        rut: '',
        password: '',
      }
    },
    computed: {
      rutErrors () {
        const errors = []
        if (!this.$v.rut.$dirty) return errors
        !this.$v.rut.maxLength && errors.push('Rut inválido')
        !this.$v.rut.minLength && errors.push('Rut inválido')
        !this.$v.rut.required && errors.push('Este campo es requerido')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Este campo es requerido')
        return errors
      },
      validarFormatoRut() {
        //TODO: validar formato y rut.
        return this.rut;
      }
    },
    methods: {
     async login(){
       this.$v.$touch()
       try{
          const response = await service.login(this.rut, this.password);
          const token = response.data.data.access_token;
          const user = this.rut;
          // persistencia de datos
          this.$store.dispatch('login', { token, user });
          
          this.$router.push("/home");
        }catch(Error){
          console.log(Error);
        }  
      },
    },
  }
</script>

