import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('Application {{ name }}', () => {
  it('monts the app', () => {
    shallowMount(App);
  });
});
