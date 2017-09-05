import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewTodo from '@/components/NewTodo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'New Todo',
      component: NewTodo
    }
  ],
  mode: 'history'
})
