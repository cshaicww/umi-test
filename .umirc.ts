import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    { path: '/', component: '@/pages/formTest' },
  ],
  fastRefresh: {},
});
