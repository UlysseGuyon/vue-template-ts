import Vue from 'vue';
import { createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import router from '@/router';
import store from '@/store';

const vueTest = createLocalVue();
vueTest.use(VueRouter);

const shallowMountConfig = {
  localVue: vueTest,
  router,
  store
};

export default shallowMountConfig;
