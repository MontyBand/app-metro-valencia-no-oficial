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
            <input class="form-control" type="text" placeholder="Destino...">
          </form>
        </div>
        <div class="contenedor--icono-flechas">
          <button class="btn__horario">
            <img class="img-fluid" src="/static/img/trayectos/doble-flecha.svg" alt="boton de cambiar sentido">
          </button>
        </div>
      </div>
      <button class="btn__horario">Mostrar horarios <i class="far fa-clock"></i></button>
    </section>
    <section class="trayectos--favoritos">
      <h1>Favoritos</h1>
      <hr class="linea">
      <table class="table">
        <tr>
          <td class="text">Cullera - Madrid</td>
          <td>
            <button>
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
        <tr>
          <td class="text">Cullera - Madrid</td>
          <td>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.24 24.18"><defs></defs><title>Asset 1</title><g id="Layer2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path id="_Path" data-name="&lt;Path&gt;" class="cls-1" d="M12.62.75c2.06,0,2,6.19,3.65,7.4s7.53-.78,8.17,1.19-5.27,3.8-5.91,5.76,3.07,6.92,1.4,8.14-5.24-3.84-7.31-3.84S7,24.45,5.31,23.24s2-6.17,1.4-8.14S.16,11.3.8,9.34,7.3,9.37,9,8.15,10.56.75,12.62.75Z"/></g></g></svg>
            </button>
          </td>
        </tr>
      </table>
    </section>
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
