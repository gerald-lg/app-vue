<template>
  <v-app>
    <!-- Barra de navegacion -->
    <Navigation/>
    <!-- Vista segun la ruta -->
    <router-view/>
  </v-app>
</template>

<script>

import Navigation from "./components/Navigation.vue";


export default {
  name: 'App',

  components: {
    Navigation,
    
  },
  data: () => ({
    //
  }),
};
</script>
