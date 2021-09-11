import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Sobremi from './components/Sobremi.vue'
import Contacto from './components/Contacto.vue'
import Post from './components/Post.vue'
import Articulo from './components/Articulo.vue'
import Notfound from './components/Notfound.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Inicio,
        },
        {
            path: '/sobremi',
            component: Sobremi,
        },
        {
            path: '/contacto',
            component: Contacto,
        },
        {
            path: '/post/:entrada',
            component: Post,
        },
        {
            path: '/articulo',
            name: 'articulos',
            component: Articulo,
        },
        {
            path: '*',
            component: Notfound,
        },
    ]
})