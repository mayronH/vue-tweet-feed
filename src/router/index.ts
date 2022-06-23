import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '../stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/UserProfile.vue'),
  },
  //   {
  //     path: "/jobs/:id",
  //     name: "jobDetail",
  //     component: () =>
  //       import(/* webpackChunkName: "jobs" */ "../views/jobs/JobDetailView.vue"),
  //     props: true,
  //   },
  // 404 Page
  {
    path: '/:catchAll(.*)*', // regex, catch any route that doesn't exists
    name: 'Not Found',
    component: () =>
      import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () =>
      import(/* webpackChunkName: "admin" */ '../views/AdminView.vue'),
    meta: {
      requiresAdmin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async(to, _, next) => {
  const store = userStore()

  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !store.isSetUserAdmin) next({ name: 'home' });
  else next();

})

export default router
