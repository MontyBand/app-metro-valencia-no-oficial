<template>
  <div class="page--mapas">
    <section class="mapas--texto">
      <h1>Mostrar rutas</h1>
      <hr class="linea">
    </section>
    <section class="mapas--boton">
      <button @click="mostrarMapa" id="boton--ubicacion" type="button" class="btn btn-light">Ubicación</button>
      <button @click="mostrarPlano" id="boton--lineas" type="button" class="btn btn-secondary">Líneas</button>
    </section>
    <section class="mapas--mostrado">`
      <iframe v-if="verMapa" id="mostrado--ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49282.29974735279!2d-0.4040668924982601!3d39.46608145619165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1ses!2ses!4v1526556379167" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      <img v-if="verPlano" id="mostrado--lineas" src="/static/img/trayectos/planoMetroValencia.jpg" alt="Plano Metro">
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageMapas',
  data () {
    return {
      msg: '',
      verMapa: true,
      verPlano: false
    }
  },
  methods: {
    mostrarMapa: function () {
      this.verMapa = true
      this.verPlano = false
    },
    mostrarPlano: function () {
      this.verPlano = true
      this.verMapa = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
