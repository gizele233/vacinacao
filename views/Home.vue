<template>
  <v-container fluid>
  <v-card 
    class="pa-md-4 mx-lg-auto mb-10 grey darken-3 container"
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
      :items="questionarios"
      :search="search"

      fixed-header
      hide-default-footer
      :page.sync="page"
      :items-per-page="23"
      class="elevation-1"
      
    >
      <template v-slot:[`item.acao`]= "{item}">
        
          <v-btn
              icon
              color="grey darken-3"
              @click="acessar(item.formularioId)"
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
  import router from '../src/router/index.js';
  import Api from "@/services/config.js";

  export default {

    
    // computed:{
    //   questionarios(){ 
    //     return this.$store.state.questionarios
    //   },
      
    // },

    mounted(){
      
      Api().get(`questionarios/`).then(response => {
        this.questionarios =  response.data; 
        this.listarQuestion();
      });

    },

    methods:{
      acessar(fomularioEscolhido){
        router.push('questionarios/'+ fomularioEscolhido)
      },

      listarQuestion(){
        for(var i=0; i<this.questionarios.length; i++){
          this.dataFormatada = this.formataStringData(this.questionarios[i].dataUltimoEnvio);
          this.questionarios[i].dataUltimoEnvio = this.dataFormatada;
        }
      },

      formataStringData(data){
        if(data != null){
          const [day, month, year] = data.split("-");
          return `${day}/${month}/${year}`;
        }else{
          return null;
        }
      }  
    },
    

    data() {
      return {
        dataFormatada: null,
        page: 1,
        search: '',
        loading: true,
        questionarios: [],
        fomularioEscolhido: [],
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

<style scoped>
  .container{
    margin: 0 auto;
  }
</style>

