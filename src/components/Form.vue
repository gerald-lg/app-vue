<template>
    <div class="mx-4 my-5 d-sm-flex flex-column align-center">
      <!-- Icono y título -->
      <div>
        <v-icon size="90px" color="#847ae1">
          mdi-lock-outline
        </v-icon>
      </div>

      <div style="text-decoration: underline #847ae1; font-size: x-large "> 
        INICIO DE SESIÓN
      </div>
      <!-- formulario -->
      <div>
        <form @submit.prevent="submit">
            <v-text-field
            v-model="rut"
      placeholder="Ingrese el rut sin puntos y con guión 11111111-1"
            :error-messages="rutErrors"
            :counter="10"
            label="USUARIO"
            required
            @input="$v.rut.$touch()"
            @blur="$v.rut.$touch()"
            ></v-text-field>
            <v-text-field
            v-model="password"
            type="password"
            :error-messages="passwordErrors"
            label="CONTRASEÑA"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            ></v-text-field>
        
            <v-btn block
            class="my-4 "
            @click="submit"
            >
            LOGIN
            </v-btn>
            
        </form>
      </div>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength} from 'vuelidate/lib/validators'
  export default {
    name : 'Form',  
    mixins: [validationMixin],
    validations: {
      rut: { required, maxLength: maxLength(10) },
      password: {required}
    },
    data: () => ({
      rut: '',
      password: '',
    }),
    computed: {
      rutErrors () {
        const errors = []
        if (!this.$v.rut.$dirty) return errors
        !this.$v.rut.maxLength && errors.push('Rut inválido')
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
      
        return this.rut;
      }
    },
    methods: {
      submit () {
        this.$v.$touch()
      }
    },
  }
</script>

<codepen-resources lang="json">
  {
    "js": [
      "https://cdn.jsdelivr.net/npm/vuelidate/dist/vuelidate.min.js",
      "https://cdn.jsdelivr.net/npm/vuelidate/dist/validators.min.js"
    ]
  }
</codepen-resources>

<codepen-additional>
  const { required, maxLength, email } = validators
  const validationMixin = vuelidate.validationMixin

  Vue.use(vuelidate.default)
</codepen-additional>