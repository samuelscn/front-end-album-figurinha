<template>
  <div>
    <h1>Criar figurinha</h1>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome">
        <b-form-input
          v-model="figurinha.nome"
          placeholder="Entre com o nome da figurinha"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="Descrição">
        <b-form-input
          v-model="figurinha.descricao"
          placeholder="Entre com a descricao da figurinha"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-button class="mt-4" type="submit" variant="primary">Criar</b-button>
    </b-form>
  </div>
</template>

<script>
import Api from '../services/api';

export default {
  data() {
    return {
      figurinha: {
        nome: '',
        descricao: '',
      }
    }
  },

  methods: {
    async onSubmit() {
      await Api.create('figurinha', this.figurinha).then(resposta => {
        alert('Figurinha criada com sucesso!', resposta);
      });
    }
  }
}
</script>