import Vue from 'vue'
import Router from 'vue-router'
import PageTrayectos from '@/components/pages/Trayectos'
import PageHorarios from '@/components/pages/mostrar_horarios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/trayectos',
      name: 'trayectos',
      component: PageTrayectos
    },
    {
      path: '/horarios',
      name: 'mostrar_horarios',
      component: PageHorarios
    }
  ]
})
