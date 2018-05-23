<template>
  <div class="page--home">
    <div class="home--brand">
      <img class="brand--img" src="/static/img/home/logo.svg" alt="Logo">
    </div>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'trayectos'}">
            <span class="nav--icono">
              <img class="brand--img" src="/static/img/home/tren.svg" alt="Logo-tarifas">
            </span>
            <h2>Trayecto</h2>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'tarjetas'}">
            <span class="nav--icono">
              <img class="brand--img" src="/static/img/home/tarjetas.svg" alt="Logo-tarifas">
            </span>
            <h2>Tarjetas</h2>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'mapas'}">
            <span class="nav--icono">
              <img class="brand--img" src="/static/img/home/mapas.svg" alt="Logo-tarifas">
            </span>
            <h2>Mapas</h2>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'tarifas'}">
            <span class="nav--icono">
              <img class="brand--img" src="/static/img/home/monedas.svg" alt="Logo-tarifas">
            </span>
            <h2>Tarifas</h2>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'creditos'}">
            <span class="nav--icono">
              <img class="brand--img" src="/static/img/home/contacto.svg" alt="Logo-tarifas">
            </span>
          <h2>Nosotros</h2>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
    }
  }
}
</script>
