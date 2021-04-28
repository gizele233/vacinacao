<template>
  <v-container fluid>
     
    <!-- {{ ente.name }} -->
    <!-- {{questionario.ente.enteId}} -->
    {{questionario}}
     <v-toolbar-title class="pa-md-4 mx-lg-auto mb-10 red darken-4"
    width="85%" color="white">{{questionario.ente.nome}}</v-toolbar-title>
    <v-card 
    class="pa-md-4 mx-lg-auto mb-10 red darken-4"
    width="85%"
    >

    <v-card-title>
      <h3 class="mt-5 mb-5 text-center white--text"></h3>
      <v-spacer></v-spacer>

    </v-card-title>

    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            N°
          </th>
          <th class="text-center">
            Enunciado
          </th>
          <th class="text-center">
            Resposta
          </th>
          <th class="text-center">
            Justificativa
          </th>
        </tr>
      </thead>
      <tbody>
        
          <td>{{  }}</td>
          
           <td>{{ questionario.dataUltimoEnvio }}</td>
            <td>{{ questionario.dataUltimoEnvio }}</td>
  
       
      </tbody>
    </template>
    
    
    </v-card>
  </v-container>
  
</template>

<script>
//import QuestionarioService from "@/services/questionarioService.js";
//import store from '../src/store/index.js';
export default {
  data(){
    return {
     
      //questionario: this.$route.params.id,
      
      
    }
  },
   

    computed:{
      
      questionario(){
          return this.$store.state.questionarios.find(quest => quest.formularioId == this.$route.params.id) || {}
      }
    },
  
  
};
</script>
