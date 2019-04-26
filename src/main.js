import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
// The routes defind in routes.js
import { routes } from './routes';

Vue.use(VueRouter);

// Creating new VueRouter and passing an object with the imported { routes }
const router = new VueRouter({
  routes: routes,

  // With this mode the url will not have the website/#/ setup to manage single applications.
  // But you will need to setup your server to always return the index.htm file whenever a request on a
  // route arrives that is not known, so on 404 errors return index.html so our app takes over the routing
  // !! On normal mode the #id at the end of a route doesnt jump to it !!
  mode: "history",
  // Defining scroll behaviour for navigation inside a page
  scrollBehavior(to, from, savedPosition) {
    // This value will be stored to the position he was last when he hits the back button.
    // With this we avoid that the page scrolls again to the to.hash
    if (savedPosition) {
      return savedPosition
    }
    // we receive the to parameter from the <router-link> :to attribute. If there is an object hash
    // we can access it with the parameter to.hash and set the value to the selector. This will scroll the page
    // on this route to the element with the id="to.hash" 
    if (to.hash) {
      return { selector: to.hash}
    }
    // If there is no saved position and no hash we scroll to the top of the page
      return {x: 0, y:0}
  }
});

// Setting up Global Route Guards. So control if we can GO to a specific route or LEAVE a specific route
  // beforeEach is executed every time a route change is triggered. 
  // !!!MOST OF THE TIME WE ONLY WANT TO PROTECT SPECIFIC ROUTES. IN THIS CASE IT IS BETTER TO SET IT UP IN THE
  // routes.js FILE !!!
  // !!! always execute next() at the end so the application can continue !!!
  // !!!  1. next() just continues it's journey to the route that was called
  //      2. next("/routeName") to make a redirect
  //      3. next(false) will abort the routing. So the user stays on the initial page
router.beforeEach((to, from, next) => {
  console.log("Global router beforeEach. to: "+to+" from:"+from);
  next();
});

new Vue({
  el: '#app',
  // Attach the router to the Vue app. To be active it needs to be defined in the App.vue with a <router-vue> tag
  router: router,
  render: h => h(App)
})
