<template>
  <v-app>
    <!-- Barra de navegacion -->
    <Navigation/>
    <!-- Vista segun la ruta -->
    <v-main>
      <router-view/>
    </v-main>
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
