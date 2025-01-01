// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importar seus componentes dinamicamente
const HomePage = () => import('../components/HomePage.vue');
const ForjaTenaz = () => import('../components/ForjaTenaz.vue');
const RegrasForja = () => import('../components/RegrasForja.vue');

// Obter a URL base a partir da variável de ambiente
const baseUrl = process.env.VUE_APP_BASE_URL || '/';

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/forja',
      name: 'forja_tenaz',
      component: ForjaTenaz,
    },
    {
      path: '/regras',
      name: 'regras',
      component: RegrasForja,
    },
  ],
});

export default router;
