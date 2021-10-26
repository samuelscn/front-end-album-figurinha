<template>
  <div>
    <h1>Meu inventário</h1>
    <b-table :items="items" :fields="fields"></b-table>
    <span>Saldo: {{ dinheiro.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</span>
  </div>
</template>

<script>
import Api from '../services/api';

export default {
  async mounted() {
    const result = await Api.list('inventario');
    this.dinheiro = result ? result.data[0].dinheiro : 0;
    this.items = result ? result.data[0].figurinha : [];
  },

  data() {
    return {
      dinheiro: 0,
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