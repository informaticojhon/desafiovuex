// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    juegos: [
      { id: 1, codigo: '0001', nombre: 'Sekiro', stock: 43, precio: '$30.000' },
      { id: 2, codigo: '0002', nombre: 'Fifa 21', stock: 55, precio: '$25.000' },
      { id: 3, codigo: '0003', nombre: 'Gears of War 4', stock: 12, precio: '$15.000' },
      { id: 4, codigo: '0004', nombre: 'Mario Tennis Aces', stock: 56, precio: '$35.000' },
      { id: 5, codigo: '0005', nombre: 'Bloodborne', stock: 12, precio: '$10.000' },
      { id: 6, codigo: '0006', nombre: 'Forza Horizon 4', stock: 4, precio: '$20.000' }
    ]
  },
  mutations: {
    updateStock(state, { id, stock }) {
      const juego = state.juegos.find(juego => juego.id === id);
      if (juego) {
        juego.stock = stock;
      }
    }
  },
  actions: {
    modificarStock({ commit }, { id, stock }) {
      commit('updateStock', { id, stock });
    }
  },
  getters: {
    juegos: state => state.juegos
  }
});
