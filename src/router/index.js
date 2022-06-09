import { createRouter, createWebHashHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage/index.vue')
const SalePage = () => import('../views/SalePage/index.vue')
const CollegePage = () => import('../views/CollegePage/index.vue')
const EducationPage = () => import('../views/EducationPage/index.vue')
const HomeSchoolPage = () => import('../views/HomeSchoolPage/index.vue')
const DataPage = () => import('../views/DataPage/index.vue')
const SettingPage = () => import('../views/SettingPage/index.vue')

const routes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/sale', component: SalePage },
  { path: '/college', component: CollegePage },
  { path: '/education', component: EducationPage },
  { path: '/homeSchool', component: HomeSchoolPage },
  { path: '/data', component: DataPage },
  { path: '/setting', component: SettingPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log(to, from);
  next()
})

export default router