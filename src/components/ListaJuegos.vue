<template>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.id">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="modificarStock(juego.id, juego.stock - 1)" :disabled="juego.stock <= 0">-</button>
            <button @click="modificarStock(juego.id, juego.stock + 1)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: ['juegos'],
    methods: {
      modificarStock(id, stock) {
        if (stock >= 0) {
          this.$emit('update-stock', { id, stock });
        }
      }
    }
  };
  </script>
  