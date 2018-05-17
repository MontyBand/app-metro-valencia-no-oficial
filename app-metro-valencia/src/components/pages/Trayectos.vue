<template>
  <div class="page--trayectos">
    <section class="trayectos--formulario">
      <div class="formulario--contenedor">
        <div class="contenedor--icono-trayecto">
          <img class="img-fluid" src="/static/img/trayectos/trayecto.svg" alt="icono de trayecto">
        </div>
        <div class="contenedor--form">
          <form>
            <input class="form-control" type="text" placeholder="Origen...">
          </form>
        </div>
        <div class="contenedor--icono-flechas">
          <button>
            <img class="img-fluid" src="/static/img/trayectos/doble-flecha.svg" alt="boton de cambiar sentido">
          </button>
        </div>
      </div>
    </section>
    <section class="trayectos--favoritos"></section>
    <section class="trayectos--historial"></section>
  </div>
</template>

<script>
export default {
  name: 'PageTrayectos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
