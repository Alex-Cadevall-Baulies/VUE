import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/RefView.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/ReactiveView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
  ]
})

export default router
