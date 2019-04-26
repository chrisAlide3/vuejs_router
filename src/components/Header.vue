<template>
    <ul class="nav nav-pills">
        <!-- With vue-router we can use <router-link> instead of <a href:""> 
            To also correctly mark the active link, we replace the <li> tag with <router-link tag:"li"
            we then add an empty <a> tag between the text. The attribute exact will only mark as active on this
            exact path. Without it all the underlying pathes will also mark it as active-->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <!-- See how to handle same pathes with only parameter changed in the User.vue -->
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
        <!-- <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link> -->
</ul>
</template>

<script>
export default {
    
}
</script>

