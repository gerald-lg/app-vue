<template>
   <v-app-bar app color="#434b63" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

			<div>
				<v-tabs background-color="transparent" slider-color="#1fd8f2">
						<v-tab> <router-link
                    to="/home"
                    custom
                    v-slot="{ href, navigate, isActive}"
                  >
                    <NavLink :active="isActive" :href="href" @click="navigate"
                      > Inicio </NavLink
                    >
                  </router-link></v-tab> 
						<v-tab>Quienes somos</v-tab>
						<v-tab><router-link
                    to="/post"
                    custom
                    v-slot="{ href, navigate, isActive}"
                  >
                    <NavLink :active="isActive" :href="href" @click="navigate"
                      > Programas </NavLink
                    >
                  </router-link></v-tab>
						<v-tab>Como funciona</v-tab>
				</v-tabs>
			</div>
    
    </v-app-bar>
</template>

<script>
	export default {
		name: "Navigation"
	};

</script>

<style scoped>

</style>