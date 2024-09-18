<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Tienda 32 Bits</h1>
    <h2 class="text-center mb-5">Lista de juegos</h2>
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

<style scoped>
h1 {
  font-weight: bold;
  color: #343a40;
}

h2 {
  font-weight: lighter;
  color: #6c757d;
}

.container {
  max-width: 900px;
}
</style>
