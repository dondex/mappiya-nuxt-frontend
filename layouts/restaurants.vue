<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/">Mappiya Restaurants</nuxt-link>
                
            </nav>
        </header>

        <!-- output page content-->
        <div>
            <slot />
        </div>

        <footer>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
            </ul>
        </footer>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>