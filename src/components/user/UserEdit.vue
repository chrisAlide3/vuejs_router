<template>
    <div>
        <h3>Edit User{{$route.params.id}}</h3>
        <hr>
        <!-- Getting the query string sent on the route. See UserDetail.vue -->
        <p>Query string of locale: {{ $route.query.locale }}</p>
        <p>Query string of q: {{ $route.query.q }}</p>
        <hr>
        <button @click="isConfirmed = true" class="btn btn-primary">Confirm</button>

        <div style="height: 700px"></div>
        <p id="data">This is some active content</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isConfirmed: false,
        };
    },

    // Guard Route on leave. Can only be defined in the component itself. 
    // Works like Global Guards. See route.js for info
    beforeRouteLeave(to, from, next) {
        // Here we check if the confirm button has been clicked before changing the route
        // - If yes we continue the navigation to the chosen route
        // - If no we show a confirm dialog.
        //      If the answer is Yes, we continue navigation to chosen route
        //      If the anser is No, we set next(false), and the routing is stopped. So we stay on same page
        if (this.isConfirmed) {
            next();
        } else {
            if (confirm("Are you sure?")) {
                next();
            } else {
                next(false);
            }
        };
    },
}
</script>
