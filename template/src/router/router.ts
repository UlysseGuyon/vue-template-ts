import VueRouter from 'vue-router';

import routes from './routes';

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => { next(); });

export default router;
