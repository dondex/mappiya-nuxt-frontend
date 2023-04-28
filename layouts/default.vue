<script setup>
useHead({
    link: [
        {
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
            rel: 'stylesheet',
            integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
            crossorigin: 'anonymous'
        },
        {
            href: 'css/main.css',
            rel: 'stylesheet',
        }
    ],
    script: [
        {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
            integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
            crossorigin: 'anonymous'
        },
        {
            src: 'js/main.js'
        }
    ]
});
</script>

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

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>