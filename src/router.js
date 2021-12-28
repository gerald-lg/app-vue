import Vue from "vue";
import VueRouter from 'vue-router'
    
Vue.use(VueRouter)

import Login from "./views/Login"
import Home from "./views/Home"
import Projects from "./views/Projects"
import Project from "./views/Project"

const routes = [
 
    { path: "/home", name: "home" ,component: Home },
    { path: "/", name: "login",component: Login },
    { path: "/post", name: "projects",component: Projects },
    { path: "/post/:id", name: "project",component: Project },
    
    
    
];

const router = new VueRouter({
    
    routes
});
  
export default router;