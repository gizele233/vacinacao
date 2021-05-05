<template>
  <v-container fluid>


  <v-card 
      class="pa-md-4 mx-lg-auto mb-10 grey darken-3 container" width="95%"
  >


  <v-card-title>
    <h3 class=" pa-md-4 mx-lg-auto mb-5 text-center white--text">{{this.ente.nome}}-MA</h3>


  </v-card-title>

     <!-- <v-toolbar-title id="cabecalho" class="pa-md-4 mx-lg-auto mb-10 grey darken-3"
    width="95%" color="white">{{this.ente.nome}}</v-toolbar-title> -->

<div v-for="questao  in questionario.questoes" :key="questao.numero">

<table>
  <tr>
    <th>Número</th>
    <td>{{questao.numero}}</td>
  </tr>
  <tr>
    
    <th>Enunciado</th>
    <td>{{questao.enunciado}}</td>
  </tr>
  <tr>
    <th>Resposta</th>
    <td>{{questao.resposta}}</td>
  </tr>
  <tr>
    <th>Justificativa</th>
    <td>{{questao.justificativa}}</td>
  </tr>
  <tr v-if="questao.documentos">
    <td colspan=2>
      <table >
        <thead class="mt-3">
          <tr>
          <th colspan ="2">Documentos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="documento in questao.documentos" :key="documento.arquivo">
            <td>{{documento.dataEnvio | moment("DD/MM/YYYY h:mm:ss")}}</td>
            <td><a :href="`https://www6.tce.ma.gov.br/questionarios-vacinacao/v2/questionarios/download/ente/${ente.enteId}/arquivo/${documento.arquivo}`">{{documento.arquivo}}</a></td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</table>
<hr class="mt-2"/>


</div>

    <v-row
      class="mt-3 ml-1 mb-1"
    >
      <v-btn
        tile
        color="primary"
        @click="voltar()"
      >
        <v-icon left>
          mdi-arrow-left
        </v-icon>
        Voltar
      </v-btn>
    </v-row>

      </v-card>
      
    </v-container>

    
  
</template>

<script>
//import QuestionarioService from "@/services/questionarioService.js";
//import store from '../src/store/index.js';
import Api from "@/services/config.js";
import router from '../src/router/index.js';

export default {

  data(){
    return {
    dataFormatada: null,
    questionario:{},
    questionarioId:this.$route.params.id,
    ente:{}

    }
  },

  mounted(){
    Api().get(`questionarios/${this.questionarioId}`).then(response => {
      this.questionario = response.data; 
      this.ente = response.data.ente;
      // this.listarQuestion();  
    });
  },

  methods:{
    voltar(){
      router.push("/");
    },

    // listarQuestion(){
    //   for(var i=0; i< this.questionario.questoes.length; i++){
    //     this.dataFormatada = this.formataStringData(this.questionario.questoes[i].documentos[0].dataEnvio + ' funfou');
    //     this.questionario.questoes[i].documentos[0].dataEnvio = this.dataFormatada;
    //   }   
    // },

    // formataStringData(data){
    //   if(typeof data !== "undefined"){
    //     const [day, month, year] = data.split("-");
    //     return `${day}/${month}/${year}`;
    //   }else{
    //     return null;
    //   }
    // }
  }
  
  
};
</script>

<style scoped>
  

  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");

   

  .container{
    margin: 0 auto;
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
    empty-cells: hide;
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
