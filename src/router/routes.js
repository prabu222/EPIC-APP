
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
    { path: '/login', component: () => import('pages/login.vue') },
    { path: '/homepage', component: () => import('pages/homepage.vue') },
    { path: '/videos', component: () => import('pages/videos.vue') },
    { path: '/more', component: () => import('pages/morevideos.vue') },
    { path: '/photo', component: () => import('pages/picture.vue') }
    


    ]
  }
]




// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
