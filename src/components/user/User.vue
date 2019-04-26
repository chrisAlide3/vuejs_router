<template>
    <div>
        <h1>The User Page</h1>
        <!-- <p>Loaded ID: {{ id }}</p> -->
        <hr>
        <button @click="navigateHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         // Here we acces the params of the active ROUTE
    //         id: this.$route.params.id,
    //     }
    // },
    // We need to setup a watch function on the $route object to update the data id if the route is the same 
    // But the parameters change. If we don't do that, Vue will not rerender the component as no value have changed
    // within it
    // watch: {
    //     "$route"(to, from) {
    //         this.id = to.params.id;
    //     } 
    // },
    methods: {
        navigateHome() {
            // Here we add the ROUTE to the ROUTER stash
            this.$router.push("/");
        },
    }
}
</script>
