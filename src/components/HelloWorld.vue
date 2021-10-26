<template>
  <div class="hello">
    <div class="nav-content">
      <b-button class="nav-button" @click="goToNewPage('criarAlbum')">
        Criar Album de Figurinha
      </b-button>
      <b-button class="nav-button" @click="goToNewPage('criarFigurinha')">
        Criar Figurinha
      </b-button>
      <b-button class="nav-button" @click="goToNewPage('visualizarAlbum')">
        Visualizar meu Album de Figurinha
      </b-button>
      <b-button class="nav-button" @click="goToNewPage('visualizarInventario')">
        Visualizar meu inventário
      </b-button>
    </div>
    <div class="body-content">
      <div v-if="!page">
        <h2>Seja Bem vindo ao album de figurinhas de carros!</h2>
      </div>
      <FormAlbum v-else-if="page === 'criarAlbum'"/>
      <FormFigurinha v-else-if="page === 'criarFigurinha'"/>
      <ListAlbum v-else-if="page === 'visualizarAlbum'"/>
      <ListInventario v-else-if="page === 'visualizarInventario'"/>
    </div>
  </div>
</template>

<script>
import FormAlbum from "./FormAlbum.vue";
import FormFigurinha from "./FormFigurinha.vue";
import ListAlbum from "./ListAlbum.vue";
import ListInventario from "./ListInventario.vue";
import Api from '../services/api';

export default {
  name: 'HelloWorld',
  components: {
    FormAlbum,
    ListAlbum,
    FormFigurinha,
    ListInventario,
  },
  
  data() {
    return {
      page: ''
    }
  },

  mounted() {
    Api.list('usuario').then(resposta => {
      console.log(resposta);
    });
  },

  methods: {
    goToNewPage(newPage) {
      this.page = newPage;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-content {
  border-bottom: 1px solid #ccc;
}
.nav-button {
  margin-right: 1rem;
}
.body-content {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  margin-top: 2rem;
  border: 2px solid #42b983;
  border-radius: 5px;
  padding: 2rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
