<template>
  <v-container fluid>

 <v-card 
    class="pa-md-4 mx-lg-auto mb-10 red darken-4" width="95%"
    
    >

     <v-toolbar-title id="cabecalho" class="pa-md-4 mx-lg-auto mb-10 red darken-4"
    width="95%" color="white">{{this.ente.nome}}</v-toolbar-title>
    

<div v-for="questao  in questionario.questoes" :key="questao.numero">

<table>
  <tr>
    <td>Número</td>
    <td>{{questao.numero}}</td>
  </tr>
  <tr>
    <td>Enunciado</td>
    <td>{{questao.enunciado}}</td>
  </tr>
  <tr>
    <td>Resposta</td>
    <td>{{questao.resposta}}</td>
  </tr>
  <tr>
    <td>Justificativa</td>
    <td>{{questao.justificativa}}</td>
  </tr>
  <tr v-if="questao.documentos">
    <td colspan=2>
      <table>
        <thead>
          <tr>
          <th colspan ="2">Documentos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="documento in questao.documentos" :key="documento.arquivo">
            <td>{{documento.dataEnvio}}</td>
            <td><a :href="`https://www6.tce.ma.gov.br/questionarios-vacinacao/v2/questionarios/download/ente/${ente.enteId}/arquivo/${documento.arquivo}`">{{documento.arquivo}}</a></td>
          </tr>
        </tbody>
      </table>



    </td>
  </tr>
  
</table>

</div>


    
    
    </v-card>
  </v-container>
  
</template>

<script>
//import QuestionarioService from "@/services/questionarioService.js";
//import store from '../src/store/index.js';
import Api from "@/services/config.js";

export default {

  data(){
    return {
    questionario:{},
    questionarioId:this.$route.params.id,
    ente:{}

    }
  },

    mounted(){
       Api().get(`questionarios/${this.questionarioId}`).then(response => {this.questionario =  response.data; this.ente = response.data.ente});
    }
      
      /*questionario(){
          return this.$store.state.questionario.find(quest => quest.formularioId == this.$route.params.id) || {}
      } */
    
  
  
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

   #cabecalho {
      font-family: "Montserrat", sans-serif;
      font-size: 30px;
      color: #E0E0E0;
      text-transform: uppercase;
      font-weight: bold;
    }
    th{
      font-weight: bold;
      word-break: keep-all;
    }
    

    th, td {
  padding: 15px;
  color: black;

  }
  table {
  border-collapse: collapse;
  width: 100%;
  text-align: justify;
  text-justify: inter-word;
  color: black;
}
table, td, th {  
  border: 2px solid #ddd;
  text-align: left;
}
table {
  table-layout:fixed;
}
td {
  white-space: wrap;
  background-color: white;
}

th {
  background-color: white;
  color: black;
}
    

</style>
