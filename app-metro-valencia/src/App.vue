<template>
  <div id="app">
    <header>
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link nav--atras" href="#">
              <img class="img-fluid" src="../static/img/common/atras.svg" alt="Volver atrás">
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav--logo" href="/">
              <img class="img-fluid" src="../static/img/common/logo.svg" alt="Volver atrás">
            </a>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
