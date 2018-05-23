import Vue from 'vue'
import Router from 'vue-router'
import PageTrayectos from '@/components/pages/Trayectos'
import PageHorarios from '@/components/pages/mostrar_horarios'
import PageHome from '@/components/pages/home'
import PageMapas from '@/components/pages/mapas'
import PageTarjetas from '@/components/pages/tarjetas'
import PageTarifas from '@/components/pages/Tarifas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/trayectos',
      name: 'trayectos',
      component: PageTrayectos
    },
    {
      path: '/tarifas',
      name: 'tarifas',
      component: PageTarifas
    },
    {
      path: '/tarjetas',
      name: 'tarjetas',
      component: PageTarjetas
    },
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/mapas',
      name: 'mapas',
      component: PageMapas
    },
    {
      path: '/horarios',
      name: 'mostrar_horarios',
      component: PageHorarios
    }
  ]
})
