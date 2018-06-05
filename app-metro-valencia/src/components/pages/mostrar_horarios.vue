<template>
  <div class="page--mostrar-horarios">
    <section class="horarios--favoritos">
      <div class="ruta">
        <div class="ruta-inicio">
          <p>{{ origenName }}</p>
        </div>
        <div class="ruta-fin">
          <p>{{ destinoName }}</p>
        </div>
      </div>
      <div class="zona">
        <p>ZONA <span v-for="zona in data.zoneTickets" v-bind:key="zona">{{ zona }}</span></p>
      </div>
      <div class="favorito">
        <button class="btn--fav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.24 24.18"><defs></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path id="_Path_" data-name="&lt;Path&gt;" class="cls-1" d="M12.62.75c2.06,0,2,6.19,3.65,7.4s7.53-.78,8.17,1.19-5.27,3.8-5.91,5.76,3.07,6.92,1.4,8.14-5.24-3.84-7.31-3.84S7,24.45,5.31,23.24s2-6.17,1.4-8.14S.16,11.3.8,9.34,7.3,9.37,9,8.15,10.56.75,12.62.75Z"/></g></g></svg>
        </button>
      </div>
    </section>
    <section class="horarios--rutas-titulo">
      <h3>Ruta</h3>
    </section>
    <section class="horarios--rutas">
      <div v-for="linea in data.journey" v-bind:key="linea" class="rutas--linea">
        <div class="rutas--inicio">
          <h4>{{ getNameStation(linea.journeyFromStation) }} - {{ getNameStation(linea.journeyToStation) }}</h4>
        </div>
        <div v-if="data != ''" class="linea--direccion">
          <div v-for="direccion in data.journey[0].journeyTrains" :key="direccion" class="direccion--ruta">
            <p>Dirección: {{ direccion }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="horarios--titulo">
      <h3>Horarios</h3>
    </section>
    <section class="horarios--salida-llegada">
      <table class="table-titulo">
        <tr>
          <th>Salida</th>
          <th>Llegada</th>
        </tr>
      </table>
    </section>
    <section class="horarios--tabla">
      <table class="table">
          <tr v-for="salida in data.journey[0].journeyHours" :key="salida">
            <td>{{ salida }}</td>
            <td>{{ calcularHoraLlegada(salida, data.duration) }}</td>
          </tr>
        </table>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
const $ = require('jquery')

export default {
  name: 'PageHorarios',
  data () {
    return {
      origen: '0',
      destino: '0',
      origenName: '',
      destinoName: '',
      data: ''
    }
  },
  mounted: function () {
    // Guardamos las variables
    this.origen = this.$route.params.origen
    this.destino = this.$route.params.destino
    this.origenName = this.$route.params.origenName
    this.destinoName = this.$route.params.destinoName
    // Pedimos al API los datos de la ruta
    Vue.http.get(`https://metrovlcschedule.herokuapp.com/api/v1/routes?from=${this.origen}&to=${this.destino}`).then(response => {
      // Guardo la información
      this.data = response.body
      console.log(response.body)
    }, response => {
      // error callback
    })
  },
  methods: {
    // Recogemos el numero que nos da para dar el nombre de la estacion
    getNameStation: function (id) {
      let name = ''
      // Pedimos al API los datos para que cuando des un numero te de el nombre de la estacion
      // Los pedimos con Jquery y Ajax porque no hay sincro con vue resource
      $.ajax({
        url: `https://metrovlcschedule.herokuapp.com/api/v1/stations/converter/${id}`,
        success: function (result) {
          name = result.station_name
        },
        async: false
      })
      return name
    },
    calcularHoraLlegada: function (hora, duracion) {
      // Transformamos a minutos y sumamos la duracion
      let arraySalida = hora.split(':')
      let numMinutosDeHora = (parseInt(arraySalida[0]) * 60) + parseInt(arraySalida[1])
      let totalMinutos = numMinutosDeHora + parseInt(duracion)
      // Transformar a Horas
      let horasFinales = Math.trunc(totalMinutos / 60)
      let minutosFinales = totalMinutos % 60
      return this.filtroHora(horasFinales) + ':' + this.filtroHora(minutosFinales)
    },
    filtroHora: function (tiempo) {
      // Parse int to string
      let miTiempo = tiempo + ''
      // Logic
      return miTiempo.length === 1 ? '0' + tiempo : tiempo
    }
  }
}
</script>
