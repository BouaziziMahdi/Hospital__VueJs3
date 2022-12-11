import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OurDoctors from "../views/OurDoctors.vue";
import Blog from "../views/blog.vue";
import book from "../views/book.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/SERVICES",
    name: "SERVICES",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SERVICESView.vue"),
  },
  {
    path: "/OurDoctors",
    name: "OurDoctors",
    component:OurDoctors,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/book",
    name: "book",
    component: book,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
