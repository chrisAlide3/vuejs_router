<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <!-- Here we display the component Header.vue always on top -->
            <!-- <app-header></app-header> -->

                <!-- If we want to show the component at different positions depending on the route 
                    we need to call <router-view> instead of the component itself and name them accordingly
                    The one with no name tag will render the default component.
                    The others will only be displayed if the name matches in the route.js components -->
                <router-view name="header-top"></router-view>
                <!-- We can or course animate the router-view with the <transition> tag </transition> -->
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                 
                 <!--This header component will only be displayed on the "/user" route. See route.js  -->
                <router-view name="header-bottom"></router-view>

            </div>
        </div>
    </div>
</template>

<script>
    // import Header from "./components/Header.vue";

    export default {
        // components: {
        //     "appHeader": Header,
        // }
    }
</script>

<style>
    .slide-leave-active {
        transition: opacity .5s ease;
        opacity: 0;
        animation: slide-out .5s ease-out forwards;
    }
    .slide-leave {
        opacity: 1;
        transform: translateY(0);
    }
    .slide-enter-active {
        animation: slide-in .5s ease-in forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateX(0);
        }
        100% {
            transform:translateX(+50px);
        }

    }
        @keyframes slide-in {
        0% {
            transform: translateX(-50px);
        }
        100% {
            transform:translateX(0);
        }
    }

</style>
