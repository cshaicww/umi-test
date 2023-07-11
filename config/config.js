import { defineConfig } from 'umi';
import pageRoutes from  './router.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    hmr: true,
  },
  routes: pageRoutes,
  sass: {
    implementation: require('node-sass'),
  },
  fastRefresh: {},
});
