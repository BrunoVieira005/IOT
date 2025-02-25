import { createRouter, createWebHistory } from 'vue-router'
import devices from '@/views/devices.vue'
import Management from '@/views/Management.vue'
import NotFound from '@/views/NotFound.vue'
import { ErrorCodes } from 'vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: devices,
      path: '/'
    },
    {
      component: Management,
      path: '/Management'
    },
    {
      component: NotFound,
      path: '/:pathMatch(.*)*'
    },
  ],
})

export default router
