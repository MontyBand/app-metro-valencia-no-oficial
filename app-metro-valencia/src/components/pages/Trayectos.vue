<template>
  <div class="page--trayectos">
    <section class="trayectos--formulario">
      <div class="formulario--contenedor">
        <div class="contenedor--icono-trayecto">
          <img class="img-fluid" src="/static/img/trayectos/trayecto.svg" alt="icono de trayecto">
        </div>
        <div class="contenedor--form">
          <form>
            <v-select style="height: 2.6rem" v-model="origen" :options="estaciones"></v-select>
            <v-select style="height: 2.6rem" v-model="destino" :options="estaciones"></v-select>
          </form>
        </div>
        <div class="contenedor--icono-flechas">
          <button v-if="origen != 'Origen' && destino!= 'Destino' && origen && destino" @click="invertirDestinos" class="btn__horario">
            <img class="img-fluid" src="/static/img/trayectos/doble-flecha.svg" alt="boton de cambiar sentido">
          </button>
        </div>
      </div>
      <router-link v-if="origen != 'Origen' && destino!= 'Destino' && origen && destino" class="btn__horario" :to="{ name: 'mostrar_horarios', params: { origen: origen.value, destino: destino.value, origenName: origen.label, destinoName: destino.label }}">
        Mostrar rutas<i class="far fa-clock"></i>
      </router-link>
    </section>
    <section class="trayectos--favoritos">
      <h1>Favoritos</h1>
      <hr class="linea">
      <table class="table">
        <tr v-for="favorito in favoritos" v-bind:key="favorito.id">
          <td class="text">{{ favorito.origen }}-{{ favorito.destino }}</td>
          <td>
            <button @click.prevent="borrarFavorito(favorito.id)">
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </table>
    </section>
    <section class="trayectos--historial">
      <h1>Historial</h1>
      <hr class="linea">
      <table class="table">
        <tr v-for="(item, pos) in historial" v-bind:key="item.id">
          <td class="text">{{ item.origen }} - {{ item.destino }}</td>
          <td>
            <button @click.prevent="!comprobarExisteFavorito(item.id) ? salvarFavorito(pos) : ''">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.24 24.18" :style="comprobarExisteFavorito(item.id) ? 'fill: white' : ''"><defs></defs><title>Asset 1</title><g id="Layer2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path id="_Path" data-name="&lt;Path&gt;" class="cls-1" d="M12.62.75c2.06,0,2,6.19,3.65,7.4s7.53-.78,8.17,1.19-5.27,3.8-5.91,5.76,3.07,6.92,1.4,8.14-5.24-3.84-7.31-3.84S7,24.45,5.31,23.24s2-6.17,1.4-8.14S.16,11.3.8,9.34,7.3,9.37,9,8.15,10.56.75,12.62.75Z"/></g></g></svg>
            </button>
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

export default {
  name: 'PageTrayectos',
  data () {
    return {
      origen: 'Origen',
      destino: 'Destino',
      estaciones: [],
      historial: [],
      favoritos: []
    }
  },
  mounted: function () {
    // Carga las estaciones
    let that = this
    Vue.http.get('https://metrovlcschedule.herokuapp.com/api/v1/stations').then(response => {
      for (let key of Object.keys(response.body)) {
        that.estaciones.push(
          {
            value: key,
            label: response.body[key]
          }
        )
      }
    }, response => {
      // error callback
    })
    // Cargo el historial
    this.historial = JSON.parse(localStorage.getItem('historial')).reverse()
    // Cargo los favoritos
    this.favoritos = []
    let tempFavoritos = JSON.parse(localStorage.getItem('favoritos'))
    if (tempFavoritos !== null) {
      this.favoritos = tempFavoritos
    }
  },
  methods: {
    invertirDestinos: function () {
      let temp = this.origen
      this.origen = this.destino
      this.destino = temp
    },
    salvarFavorito: function (pos) {
      // Cogemos la información del que ha pulsado
      let nuevoFavorito = this.historial[pos]
      // Se la añado al array
      this.favoritos.push(nuevoFavorito)
      // Lo guardo para que aparezca cada vez que se cargue la página y no se pierda la información
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos))
    },
    comprobarExisteFavorito: function (id) {
      let existe = false
      for (let favorito of this.favoritos) {
        if (favorito.id === id) {
          existe = true
        }
      }
      return existe
    },
    borrarFavorito: function (id) {
      // Buscamos el favorito para eliminar
      let that = this
      this.favoritos.forEach(function (favorito, pos) {
        if (favorito.id === id) {
          that.favoritos.splice(pos, 1)
        }
      })
      // Guardamos los cambios
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos))
    }
  }
}
</script>
