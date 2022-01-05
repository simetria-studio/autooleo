import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/model-select',
    name: 'ModelSelect',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModelSelect.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue')
  },
  {
    path: '/add-car',
    name: 'AddCar',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddCar.vue')
  },
  {
    path: '/select-model-add',
    name: 'SelectModelAdd',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectModelAdd.vue')
  },
  {
    path: '/select-car-add',
    name: 'SelectCarAdd',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectCarAdd.vue')
  },
  {
    path: '/form-car-add',
    name: 'FormAddCar',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormAddCar.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
