<template>
    <div>
        <!-- $route can also be displayed directy without setting a data object for it -->
        <h3>Welcome user{{ $route.params.id }}</h3>
        <hr>

            <!-- One way of doing it is with an @click on button. Then call a method to push the new route
            to the router stash -->
        <!-- <button @click="editUser" class="btn btn-primary">Edit</button> -->

            <!-- A better way is to use the <router-link> tag like this: -->
        <!-- <router-link :to="'/user/'+$route.params.id+'/edit'" tag="button" class="btn btn-primary">Edit</router-link> -->

            <!-- Even better is to use named routes, see routes.js file -->

            <!-- We can add a query attribute which is an object with key:value pairs, these will be attached at the
                end of the route. So www.website/route?locale='en' q=100. We dont need to set it up in the route.js file
                To access those parameters on the receiving component just use this.route.query.nameOfTheKey-->

                <!-- With the hash parameter we add #data to the end of the route to navigate within the page to a
                    certain ID. For it to work we need to define the scroll behaviour in the main.js file!  -->
            <router-link 
                        :to="{name: 'userEdit', 
                              params: {id: $route.params.id},
                              query: {locale: 'en', q: 100},
                              hash: '#data'
                              }" 
                              tag="button"
                              class="btn btn-primary">
                    Edit
            </router-link>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },

    // methods: {
            // One way of doing it is with an @click on button. Then call a method to push the new route
            // to the router stash
    //     editUser() {
    //         this.$router.push("/user/"+this.id+"/edit");
    //     }
    // }

    // Another way to implement Route Guards on the component itself
    // Same functioning than Global Guard. See main.js for more infos
    beforeRouteEnter(to, from, next) {
        console.log("Before user route entered");
        next();
    }
}
</script>
