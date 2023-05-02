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
    <div>
        <div id="topbar" class="d-flex align-items-center fixed-top">
            <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
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
                    <div class="mx-2" v-if="useCookie('bearer_token').value">
                        <i class="fa-solid fa-user"></i>
                        <span class="mx-1">My Account</span>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <div class="mx-2" v-if="useCookie('bearer_token').value">
                        <button class="btn btn-link" @click="logout">
                            <i class="fa-solid fa-unlock"></i>
                            <span class="mx-1">Logout</span>
                        </button>
                    </div>
                    <div class="mx-2" v-else>
                        <nuxt-link to="login" class="btn btn-link">
                            <i class="fa-solid fa-unlock"></i>
                            <span class="mx-1">Login</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
                <nuxt-link to="/" class="logo me-auto"><img src="/img/mappiya-logo.png" alt="" /></nuxt-link>


                <nav id="navbar" class="navbar order-last order-lg-0 w-50">
                    <div class="input-group w-100">
                        <input type="text" class="form-control" placeholder="Search product, vendor, item"
                            aria-label="Search product, vendor, item" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-danger" type="button" id="button-addon2">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <!-- <i class="bi bi-list mobile-nav-toggle"></i> -->
                </nav>
                <!-- .navbar -->

                <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">My</span> Cart</a>
            </div>
        </header>

        <!-- output page content-->
        <div class="container mx-auto">
            <slot />
        </div>

        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                    <div class="footer-info">
                        <h3>Mappiya</h3>
                        <p>
                        A108 Adam Street <br />
                        NY 535022, USA<br /><br />
                        <strong>Phone:</strong> +1 5589 55488 55<br />
                        <strong>Email:</strong> info@example.com<br />
                        </p>
                        <div class="social-links mt-3">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"
                            ><i class="bx bxl-facebook"></i
                        ></a>
                        <a href="#" class="instagram"
                            ><i class="bx bxl-instagram"></i
                        ></a>
                        <a href="#" class="google-plus"
                            ><i class="bx bxl-skype"></i
                        ></a>
                        <a href="#" class="linkedin"
                            ><i class="bx bxl-linkedin"></i
                        ></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>
                        <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i>
                        <a href="#">Terms of service</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i>
                        <a href="#">Privacy policy</a>
                        </li>
                    </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li>
                        <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i>
                        <a href="#">Web Development</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i>
                        <a href="#">Product Management</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                        </li>
                        <li>
                        <i class="bx bx-chevron-right"></i>
                        <a href="#">Graphic Design</a>
                        </li>
                    </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>
                        Tamen quem nulla quae legam multos aute sint culpa legam noster
                        magna
                    </p>
                    <form action="" method="post">
                        <input type="email" name="email" /><input
                        type="submit"
                        value="Subscribe"
                        />
                    </form>
                    </div>
                </div>
                </div>
            </div>

            <div class="container">
                <div class="copyright">
                &copy; Copyright <strong><span>Yaramay</span></strong
                >. All Rights Reserved
                </div>
                <div class="credits">Designed by <a href="#!">YARAMAY DEV</a></div>
            </div>
        </footer>

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