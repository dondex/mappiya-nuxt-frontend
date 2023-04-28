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
        <div id="topbar" class="d-flex align-items-center fixed-top">
            <div
                class="container d-flex align-items-center justify-content-center justify-content-md-between"
            >
                <div class="align-items-center d-none d-md-flex">
                <!-- <i class="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM -->
                </div>
                <div class="d-flex align-items-center">
                <div class="mx-2">
                    <i class="fa-solid fa-language"></i><span>En - Language</span>
                </div>
                <div class="mx-2">
                    <i class="fa-solid fa-rupee-sign"></i><span>SR - Currency</span>
                </div>
                <div class="mx-2">
                    <i class="fa-solid fa-user"></i><span class="mx-1">My Account</span
                    ><i class="fa-solid fa-caret-down"></i>
                </div>
                </div>
            </div>
        </div>
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
                <nuxt-link to="/" class="logo me-auto"><img src="/img/mappiya-logo.png" alt=""
                /></nuxt-link>
                

                <nav id="navbar" class="navbar order-last order-lg-0 w-50">
                <div class="input-group w-100">
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Search product, vendor, item"
                    aria-label="Search product, vendor, item"
                    aria-describedby="button-addon2"
                    />
                    <button
                    class="btn btn-outline-danger"
                    type="button"
                    id="button-addon2"
                    >
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <!-- <i class="bi bi-list mobile-nav-toggle"></i> -->
                </nav>
                <!-- .navbar -->

                <a href="#appointment" class="appointment-btn scrollto"
                ><span class="d-none d-md-inline">My</span> Cart</a
                >
            </div>
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