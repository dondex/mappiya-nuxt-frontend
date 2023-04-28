<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/">LOGO</nuxt-link>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
                </ul>
            </nav>
        </header>

        <!-- output page content-->
        <div class="container mx-auto">
            <slot />
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>