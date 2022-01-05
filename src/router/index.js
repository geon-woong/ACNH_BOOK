import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home'
import Fish from '../views/Fish'
import FishDetail from '../views/details/FishDetail'
import BugDetail from '../views/details/BugDetail'
import Bugs from '../views/Bugs'
import Sea from '../views/Sea'
import SeaDetail from '../views/details/SeaDetail'
import Fossils from '../views/Fossils'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/fish",
    component: Fish,
  },
  {
    path: "/fish/:id",
    component: FishDetail,
  },
  {
    path: "/bug",
    component: Bugs,
  },
  {
    path: "/bug/:id",
    component: BugDetail,
  },
  {
    path: "/sea",
    component: Sea,
  },
  {
    path: "/sea/:id",
    component: SeaDetail,
  },
   
  {
    path: "/fossils",
    component: Fossils,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;