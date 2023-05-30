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
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            rel: 'stylesheet',
            integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
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
function logout(event) {
    const token = useCookie('bearer_token')
    token.value = null;
    navigateTo('/login')
}
</script>

<template>
    <nav class="navbar navbar-light bg-light shadow">
        <div class="container">
            <nuxt-link to="/" class="navbar-brand">
                <img src="/img/mappiya-logo.png" alt="" width='55%'/>
            </nuxt-link>
        </div>
    </nav>
    <div>
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

.btn-link {
    font-size: smaller;
    font-weight: 400;
    /* text-decoration: underline; */
    color: #fdfeff;
    text-decoration: none;
}
</style>