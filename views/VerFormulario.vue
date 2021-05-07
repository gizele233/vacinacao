<template>
  <v-container fluid>
    
    <v-card
      class="pa-md-4 mx-lg-auto mb-10 grey darken-3 container"
      width="85%"
    >
    
      <v-card-title>
        <h3 class="pa-md-2 mx-lg-auto mb-2 text-center white--text">
          {{ this.ente.nome }} - MA
        </h3>
      </v-card-title>
      <v-row class="mt-3 ml-1 mb-5">
        <v-btn tile color="primary" @click="voltar()">
          <v-icon left font-weight="bold"> mdi-arrow-left </v-icon>
          Voltar
        </v-btn>
      </v-row>

      <!-- <v-toolbar-title id="cabecalho" class="pa-md-4 mx-lg-auto mb-10 grey darken-3"
    width="95%" color="white">{{this.ente.nome}}</v-toolbar-title> -->

      <div v-for="questao in questionario.questoes" :key="questao.numero">
        <table>
          <tr>
            <th>Número</th>
            <td>{{ questao.numero }}</td>
          </tr>
          <tr>
            <th>Enunciado</th>
            <td>{{ questao.enunciado }}</td>
          </tr>
          <tr>
            <th>Resposta</th>
            <td>{{ questao.resposta }}</td>
          </tr>
          <tr>
            <th>Justificativa</th>
            <td>{{ questao.justificativa }}</td>
          </tr>
          <tr v-if="questao.documentos.length > 0">
            <td colspan="2">
              <table>
                <thead class="mt-3">
                  <tr>
                    <th colspan="2">Documentos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="documento in questao.documentos"
                    :key="documento.arquivo"
                  >
                    <td>
                      {{ documento.dataEnvio.substring(0, 2) }}/{{
                        documento.dataEnvio.substring(3, 5)
                      }}/{{ documento.dataEnvio.substring(6, 10) }}
                    </td>
                    <td>
                      <a
                        :href="`https://www6.tce.ma.gov.br/questionarios-vacinacao/v2/questionarios/download/ente/${ente.enteId}/arquivo/${documento.arquivo}`"
                        >{{ documento.arquivo }}</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
        <hr class="mt-2" />
      </div>

      <v-row class="mt-3 ml-1 mb-1">
        <v-btn tile color="primary" @click="voltar()">
          <v-icon left> mdi-arrow-left </v-icon>
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
import router from "../src/router/index.js";
import moment from "moment";

export default {
  data() {
    return {
      dataFormatada: null,
      questionario: {},
      questionarioId: this.$route.params.id,
      ente: {},
    };
  },

  mounted() {
    Api()
      .get(`questionarios/${this.questionarioId}`)
      .then((response) => {
        this.questionario = response.data;
        this.ente = response.data.ente;
        // this.listarQuestion();
      });
  },
  methods: {
    voltar() {
      router.push("/");
    },
    moment: function () {
      return moment();
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
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");

* {
  font-family: "Montserrat", sans-serif;
  
  
}

.container {
  margin: 0 auto;
}

h3{
  font-family: "Montserrat", sans-serif;
  font-size: 34px;
  color: #e0e0e0;
  text-transform: uppercase;
  font-weight: bold;
}

th {
  font-weight: bold;
  word-break: keep-all;
}

th,
td {
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

table,
td,
th {
  border: 2px solid #ddd;
  text-align: left;
  font-size: 17px;
}

table {
  table-layout: fixed;
  empty-cells: hide;
}

td {
  white-space: wrap;
  background-color: white;
  font-weight: normal;
}

th {
  background-color: white;
  color: black;
  
}
</style>
