<template>
    <div class="my-5 pa-15 d-flex flex-column align-center bg-color">
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
            @change="cambiarFormato($event)"
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
        error : false,
      }
    },
    computed: {
      rutErrors () {
        const errors = []
        if (!this.$v.rut.$dirty) return errors
        !this.$v.rut.required && errors.push('Este campo es requerido')
        !this.validarFormatoRut(this.rut) && errors.push('Formato invalido')
        !this.validarRut(this.rut) && errors.push('Rut inválido')
        this.error && errors.push('Usuario invalido')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Este campo es requerido')
        return errors
      },
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
          this.error = true;
          console.log(Error);
        }  
      },
      validarFormatoRut(rut) {
        var expReg = RegExp((/\d{1,2}(\.\d{3}){2}-(\d|k)$/i));
        return (expReg.test(rut))   
      },
      validarRut(rutCompleto){
        var rutAux = this.cambiarFormato2(rutCompleto);
        var tmp 	= rutAux.split('-');
        var digv	= tmp[1]; 
        var rut 	= tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
        return (this.calculardigVerificador(rut) == digv);
      },
      calculardigVerificador(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
          S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
      },
      //metodo que cambia desde un rut sin puntos con guion -> XX.XXX.XXX-X
      cambiarFormato(arg){
        //(/\d{8}-(\d|k)$/i)  si obedece a este patron se cambia sino lanza error
        var rut = arg.split("-");
        if(rut[0].length == 8 ){
          var rutAux = "";
          rutAux = rutAux+(rut[0].slice(0,2))+".";

          for(var i=2; i<rut[0].length; i+=3){
            rutAux = rutAux+(rut[0].slice(i,i+3));

            if(i!=5){
              rutAux = rutAux+"."
            }
            else{
              return this.rut = rutAux+"-"+rut[1];
            }
          }
        }
      },
      //metodo que cambia desde XX.XXX.XXX-X a XXXXXXXX-X
      cambiarFormato2(arg){
        var rut = (arg.split("."));
        var rutAux='';
        rut.forEach(aux => {
          rutAux= rutAux+ aux;
        });
        return rutAux;
      }
    }
}
</script>

<style scoped>
   
.bg-color{
  background-color: whitesmoke;
  border-radius: 15px;
}
</style>


