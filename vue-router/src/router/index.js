import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/jobs/JobsView.vue')
    },
    {
      // We are including a subroute in routes, this is a dynamic subroute
      path: '/jobs/:id',
      name: 'jobsDescriptions',
      component: () => import('../views/jobs/JobsDescriptions.vue'),
      //We are confirming we want to send props to this route
      props: true
    },
    //we can also redirect people to the wanted route
    {
      path: '/all-jobs',
      redirect: '/jobs'
    },
    //catch 404
    {
      //path must be exactly this one
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('../views/notFound.vue')

    }

  ]
})

export default router
