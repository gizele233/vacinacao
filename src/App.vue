<template>
<div>
  
  <v-app id="app">
    
   
    <v-card
      class="flex black text-center"
      flat
      tile
    >
    
    <v-container fluid>
      <v-card-title class="grey lighten-2">
        <v-img
          max-height="180" 
          max-width="350"
          src="./assets/logo_tce.png"
          class="mb-10 ml-16 mr-5"
        >
        </v-img>
          <router-view/>
      </v-card-title>
    </v-container>
      

      <v-card-text class="py-2 white--text text-center" style="background=fixed">
        {{ new Date().getFullYear() }} — <strong>©Copyright TCE-MA - Todos os Direitos Reservados</strong>
      </v-card-text>

    </v-card>

   
  </v-app>
  </div>
</template>

<script>
//import Home from './components/Home';

export default {
  name: 'App',
  mounted(){
      this.$store.dispatch('loadQuestionarios');
      
  },

  components: {
   // Home,
  },

 /*  data: () => ({
    //
  }), */
};
</script>

<style scoped>
  

  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
  
  * {
      padding:0;
      margin:0;
      vertical-align:baseline;
      list-style:none;
      border:0
    }

    #app {
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      background: #E0E0E0;
    }

    .container--fluid{
      padding:0;
      margin:0;
    }

</style>
