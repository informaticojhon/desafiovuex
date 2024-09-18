<template>
  <div class="container">
    <h1 class="title">Tienda 32 Bits</h1>
    <h2 class="subtitle">Lista de juegos</h2>
    <ListaJuegos :juegos="juegos" @update-stock="modificarStock" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListaJuegos from './components/ListaJuegos.vue';

export default {
  components: {
    ListaJuegos
  },
  computed: {
    ...mapState(['juegos']),
  },
  methods: {
    modificarStock({ id, stock }) {
      this.$store.dispatch('modificarStock', { id, stock });
    }
  }
};
</script>
