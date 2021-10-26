<template>
  <div>
    <h1>Criar album de figurinha</h1>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Nome do album">
        <b-form-input
          v-model="album.nome"
          placeholder="Entre com o nome do album"
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
      album: {
        nome: '',
      }
    }
  },

  methods: {
    async onSubmit() {
      await Api.create('album', this.album);
    }
  }
}
</script>