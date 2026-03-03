import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import InvoiceView from '../views/InvoiceView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/invoice/:invoiceId',
      name: 'Invoice',
      component: InvoiceView
    }
  ]
})