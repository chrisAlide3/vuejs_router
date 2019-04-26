<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">                
            <!-- We can copy bootstrap and replace <li> tags with <router-link> and set property tag="li"
                In the DOM <router-link> is replaced with this tag attribute, so all bootstrap classes of <li>
                tags will render as expected.

                We also need to remove the anchor tag <a href> and use the to attribute in <router-link> to replace 
                the navigation of href.

                Finally we can wrap the text in an empty <a>some text</a> anchor tag to get the CSS pointer and color
                for <a> tags. 
            -->
            <router-link 
                        class="list-group-item" 
                        tag="li" style="cursor: pointer"
                        to="/user/1">
                            <a>User 1</a>
            </router-link>
            <router-link 
                        class="list-group-item" 
                        tag="li" style="cursor: pointer"
                        to="/user/2">
                            <a>User 2</a>
            </router-link>
            <router-link 
                        class="list-group-item" 
                        tag="li" style="cursor: pointer"
                        to="/user/3">
                            <a>User 3</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>
