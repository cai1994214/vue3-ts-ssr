import { createRouter, createWebHashHistory } from 'vue-router';

const routers = [
  {
    path: '/',
    redirect: '/report/shenzhenwanbao',
    meta: {
      title: '深圳晚报',
    },
  },
  {
    path: '/report/shenzhenwanbao',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '深圳晚报',
    },
  },
  {
    path: '/report/jingbao',
    component: () => import('../views/jingbao/index.vue'),
    meta: {
      title: '晶报',
    },
  },
  {
    path: '/report/shenzhenxinwen/lsy',
    component: () => import('../views/szxw1/index.vue'),
    meta: {
      title: '深圳新闻',
    },
  },
  {
    path: '/report/shenzhenxinwen/xjm',
    component: () => import('../views/szxw2/index.vue'),
    meta: {
      title: '深圳新闻',
    },
  },
  {
    path: '/report/dushiwanbao',
    component: () => import('../views/nfds/index.vue'),
    meta: {
      title: '都市晚报',
    },
  },
  {
    path: '/report/dushiwanbao/lldx',
    component: () => import('../views/nfds/index2.vue'),
    meta: {
      title: '都市晚报',
    },
  },
  {
    path: '/report/shenzhentequ',
    component: () => import('../views/sztq/index.vue'),
    meta: {
      title: '深圳特区报',
    },
  },
  {
    path: '/report/guangdongshenzhen',
    component: () => import('../views/gdsz/index.vue'),
    meta: {
      title: '深圳新闻网',
    },
  },
  {
    path: '/report/guangdongshenzhen/lldx',
    component: () => import('../views/gdsz1/index.vue'),
    meta: {
      title: '深圳新闻网',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});

export default router;
