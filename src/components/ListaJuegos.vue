<template>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nombre</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in juegos" :key="juego.id">
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.stock }}</td>
            <td>{{ juego.precio }}</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="modificarStock(juego.id, juego.stock - 1)" :disabled="juego.stock <= 0">-</button>
              <button class="btn btn-sm btn-success" @click="modificarStock(juego.id, juego.stock + 1)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
  
  <style scoped>
  .table {
    width: 100%;
    margin-top: 20px;
  }
  
  .thead-dark {
    background-color: #343a40;
    color: white;
  }
  
  .btn {
    margin: 0 5px;
  }
  
  .table-hover tbody tr:hover {
    background-color: #f8f9fa;
  }
  </style>
  