<template>
    <div>
        <h3>Edit User{{$route.params.id}}</h3>
        <hr>
        <!-- Getting the query string sent on the route. See UserDetail.vue -->
        <p>Query string of locale: {{ $route.query.locale }}</p>
        <p>Query string of q: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary">Confirm</button>

        <div style="height: 700px"></div>
        <p id="data">This is some active content</p>
    </div>
</template>