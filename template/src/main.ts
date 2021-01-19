import Vue, { VNode } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount('#app');
