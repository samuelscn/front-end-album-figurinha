<template>
  <div>
    <div v-if="items">
      <h1>{{ title }}</h1>
      <b-table :items="items" :fields="fields"></b-table>
    </div>
    <div v-else>
      <h1>Você ainda não possui nenhum album de figurinhas cadastrado!</h1>
    </div>
  </div>
</template>

<script>
import Api from '../services/api';

export default {
  async mounted() {
    const result = await Api.list('album');
    this.title = result.data[0].nome;
    this.items = result.data[0].figurinha;
  },

  data() {
    return {
      title: '',
      fields: [
        {
          key: 'id_figurinha',
          label: 'ID',
        },
        {
          key: 'nome',
          label: 'Nome Figurinha',
        }
      ],
      items: []
    }
  }
}
</script>