import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import User from "./components/user/User.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import UserStart from "./components/user/UserStart.vue";

// !!!! IMPORTANT !!!!
// The components of the routes will always be displayed in the App.vue file with the 
// <route-view optionally name="componentName" if multiple components are displayed"></route-view>!!

// Only Children routes will be displayed in the Parent component with the <route-view></route-view> tag


// Routes are objects in an array. It contains the route and the component to be loaded on that path
// This file needs to be imported into the main.js file

export const routes = [
    // We can also pass multiple components for a path. Just change the attribute component to components: {objects}
    // - The default will be displayed on the <route-view> component that is not named.
    // - The Header will be displayed in the <route-view name="header-top"> See App.vue and User.vue
    {path: "", name: "home", components: { default: Home,
                                          "header-top": Header,
                                        }, 
    },

    // Defining children routes (nested paths): In the parent route we define a third object children which is again
    // an array of objects. If the children path doesnt start with / it will be appended to the parent route.
    // If we start it with / it will be appended to the root path so website.com/children path
        // Children routes must be called in the template of the Parent route with <router-view> tag
    {path: "/user", components: { default: User,
                                  "header-bottom": Header,
                                }, 
                    children: [
                                {path: "", component: UserStart},
                                // we can pass parameters to the route with :parameterName
                                {path: ":id", component: UserDetail, 
                                            // route guard. See information in routes.js for global guard. Works same
                                            beforeEnter:(to, from, next)=>{
                                              console.log("inside route setup for route guard");
                                              next();
                                            }
                                },

                                // We can assign a name to the path. So in the <router-link> tag we can specify the 
                                // attribute :to="{name: 'userEdit', params: {id: $route.params.id} }"
                                // Note that the attribute to has to be binded as we pass an object, so use v-bin:to or short :to!
                                // Also the key params requires an object
                                {path: ":id/edit", component: UserEdit, name: "userEdit"},
                                ]
    },
    
    {path: "redirect-me", redirect: "/user"},

    // The last route should be a redirect. If no path matches above, it will redirect to the route you specify
    {path: "*", redirect: "/"}, 


]