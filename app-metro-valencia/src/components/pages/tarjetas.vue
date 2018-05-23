<template>
  <div class="page--tarjetas">
    <section class="buscador">
      <h1>Tarjetas</h1>
      <hr class="linea">
      <form class="buscador--formulario">
        <input class="form-control" type="text" placeholder="Nº de tarjeta...">
        <button class="btn formulario--boton"><i class="fas fa-search"></i></button>
      </form>
    </section>
    <section class="busqueda">
      <h1>Tarjetas</h1>
      <hr class="linea">
      <div class="busqueda--textos">
        <p>
          A la tarjeta 1526 5849 1584 lo quedan
        </p>
        <p>
          <strong>8 viajes.</strong>
        </p>
      </div>
      <div class="busqueda--anyadir-favoritos">
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.24 24.18"><defs></defs><title>Asset 1</title><g id="Layer2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path id="_Path" data-name="&lt;Path&gt;" class="cls-1" d="M12.62.75c2.06,0,2,6.19,3.65,7.4s7.53-.78,8.17,1.19-5.27,3.8-5.91,5.76,3.07,6.92,1.4,8.14-5.24-3.84-7.31-3.84S7,24.45,5.31,23.24s2-6.17,1.4-8.14S.16,11.3.8,9.34,7.3,9.37,9,8.15,10.56.75,12.62.75Z"/></g></g></svg>
        </button>
      </div>
    </section>
    <section class="anyadir-favoritos">
      <h1>Añadir a favoritos</h1>
      <hr class="linea">
      <p>Tarjeta: <strong>1526 5849 1584</strong></p>
      <form class="anyadir-favoritos--formulario">
        <input class="form-control" type="text" placeholder="Titular de la tarjeta...">
        <button class="btn formulario--boton"><i class="fas fa-plus"></i></button>
      </form>
    </section>
    <section class="favoritos">
      <div class="titulo">
        <h1>Mis Tarjetas</h1>
        <hr class="linea">
      </div>
      <div class="favoritos--tarjetas">
        <div class="tarjetas--informacion">
          <div class="informacion--nombre">
            <p>Tarjeta de Alberto Maestro</p>
          </div>
          <div class="informacion--viajes">
            <p>8 viajes</p>
          </div>
        </div>
        <button class="tarjetas--eliminar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.97 25.93"><title>Papelera</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><g id="_Group_" data-name="&lt;Group&gt;"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M18,3.11H14a3.51,3.51,0,0,0-7,0H3a3,3,0,0,0-3,3v.15A3,3,0,0,0,1.87,9V23a3,3,0,0,0,3,3h11.3a3,3,0,0,0,3-3V9A3,3,0,0,0,21,6.22V6.07a3,3,0,0,0-3-3ZM10.48,1.4a2.11,2.11,0,0,1,2.07,1.7H8.42a2.11,2.11,0,0,1,2.07-1.7ZM17.69,23a1.56,1.56,0,0,1-1.56,1.56H4.83A1.56,1.56,0,0,1,3.28,23V9.18H17.69ZM19.56,6.22A1.56,1.56,0,0,1,18,7.78H3A1.56,1.56,0,0,1,1.4,6.22V6.07A1.56,1.56,0,0,1,3,4.51H18a1.56,1.56,0,0,1,1.56,1.56Zm0,0"/><path id="_Compound_Path_2" data-name="&lt;Compound Path&gt;" d="M6.72,22.73a.7.7,0,0,0,.7-.7V14.11a.7.7,0,1,0-1.4,0V22a.7.7,0,0,0,.7.7Zm0,0"/><path id="_Compound_Path_3" data-name="&lt;Compound Path&gt;" d="M10.48,22.73a.7.7,0,0,0,.7-.7V14.11a.7.7,0,1,0-1.4,0V22a.7.7,0,0,0,.7.7Zm0,0"/><path id="_Compound_Path_4" data-name="&lt;Compound Path&gt;" d="M14.25,22.73A.7.7,0,0,0,15,22V14.11a.7.7,0,1,0-1.4,0V22a.7.7,0,0,0,.7.7Zm0,0"/></g></g></g></svg>
        </button>
      </div>
      <div class="favoritos--tarjetas">
        <div class="tarjetas--informacion">
          <div class="informacion--nombre">
            <p>Tarjeta de Alberto Maestro</p>
          </div>
          <div class="informacion--viajes">
            <p>8 viajes</p>
          </div>
        </div>
        <button class="tarjetas--eliminar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.97 25.93"><title>Papelera</title><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><g id="_Group_" data-name="&lt;Group&gt;"><path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" d="M18,3.11H14a3.51,3.51,0,0,0-7,0H3a3,3,0,0,0-3,3v.15A3,3,0,0,0,1.87,9V23a3,3,0,0,0,3,3h11.3a3,3,0,0,0,3-3V9A3,3,0,0,0,21,6.22V6.07a3,3,0,0,0-3-3ZM10.48,1.4a2.11,2.11,0,0,1,2.07,1.7H8.42a2.11,2.11,0,0,1,2.07-1.7ZM17.69,23a1.56,1.56,0,0,1-1.56,1.56H4.83A1.56,1.56,0,0,1,3.28,23V9.18H17.69ZM19.56,6.22A1.56,1.56,0,0,1,18,7.78H3A1.56,1.56,0,0,1,1.4,6.22V6.07A1.56,1.56,0,0,1,3,4.51H18a1.56,1.56,0,0,1,1.56,1.56Zm0,0"/><path id="_Compound_Path_2" data-name="&lt;Compound Path&gt;" d="M6.72,22.73a.7.7,0,0,0,.7-.7V14.11a.7.7,0,1,0-1.4,0V22a.7.7,0,0,0,.7.7Zm0,0"/><path id="_Compound_Path_3" data-name="&lt;Compound Path&gt;" d="M10.48,22.73a.7.7,0,0,0,.7-.7V14.11a.7.7,0,1,0-1.4,0V22a.7.7,0,0,0,.7.7Zm0,0"/><path id="_Compound_Path_4" data-name="&lt;Compound Path&gt;" d="M14.25,22.73A.7.7,0,0,0,15,22V14.11a.7.7,0,1,0-1.4,0V22a.7.7,0,0,0,.7.7Zm0,0"/></g></g></g></svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageTarjetas',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
