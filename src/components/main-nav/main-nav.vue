<template class="nav has-shadow">
    <div class="container">
        <div class="nav-center">
            <router-link to="/home" active-class="is-active" class="nav-item is-tab">Home</router-link> |
            <router-link to="/passenger" active-class="is-active" class="nav-item is-tab">Passengers</router-link> |
            <router-link to="/plane" active-class="is-active" class="nav-item is-tab">Planes</router-link> |
            <router-link to="/flight" active-class="is-active" class="nav-item is-tab">Flight</router-link> |
            <router-link to="/bookflight" active-class="is-active" class="nav-item is-tab">Book Flight</router-link>
        </div>
    </div>
    </nav>
</template>
<script>
    export default {
        name: 'main-nav'
    }

</script>
<style scoped lang="scss">

.nav {
    width: 100%;
}

.nav-center {
    align-items: center;
    cursor: default;    
}

</style>