import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/xxx",
    name: "xxx",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/xxx.vue"),
  },
  {
    path: "/upload1",
    name: "upload1",
    component: () => import(/* webpackChunkName: "about" */ "../views/upload1.vue"),
  },
  {
    path: "/example",
    name: "example",
    component: () => import(/* webpackChunkName: "about" */ "../views/example.vue"),
  },
  {
    path: "/example1",
    name: "example1",
    component: () => import(/* webpackChunkName: "about" */ "../views/example1.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import( "../views/table.vue"),
  },
  {
    path: "/table2",
    name: "table2",
    component: () => import( "../views/table2.vue"),
  },
  {
    path: "/slot",
    name: "slot",
    component: () => import( "../views/slot/slot.vue"),
  },
  {
    path: "/parent",
    name: "parent",
    component: () => import( "../views/children/parent.vue"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import( "../views/tree/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
