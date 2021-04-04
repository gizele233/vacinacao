<template>
  <v-container fluid>
    
  <v-card 
    class="pa-md-4 mx-lg-auto mb-10 red darken-4"
    width="85%"
    >
    <v-card-title>
     <h3 class="mt-5 mb-5 text-center white--text">QUESTIONÁRIO DE VACINAÇÃO CONTRA O SARS-COV2</h3>
      <v-spacer></v-spacer>

      <v-text-field
        dense
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="questionario"
      :search="search"
      fixed-header
      hide-default-footer
      :page.sync="page"
      :items-per-page="23"
      class="elevation-1"
      
    >
      <template v-slot:[`item.acao`]>
        
          <v-btn
              icon
              color="red darken-4"
            >
              <v-icon>mdi-format-list-bulleted-square</v-icon>

          </v-btn>
        
      </template>

    </v-data-table>
    <v-pagination
      v-model="page"
      :length="10"
      circle
      class="mt-2"
    ></v-pagination>
  </v-card>

  </v-container>
</template>

<script>
  import QuestionarioService from "@/services/questionarioService.js";

  export default {
    questionarioService: null,
    created(){
      this.questionarioService = new QuestionarioService();
      this.listarQuestion();
    },

    methods: {
      listarQuestion(){
        this.questionarioService.questionAll().then(resposta => {
          this.questionario = resposta; //popula a tabela com o conteúdo da resposta da requisição
        })
      }
    },

    data() {
      return {
        page: 1,
        search: '',
        questionario: [],
        headers: [
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Ente', value: 'ente.nome' },
          { text: 'Data de envio', value: 'dataUltimoEnvio' },
          { text: 'Detalhes', value: 'acao' },
        ],
      }
    }
  }
</script>
