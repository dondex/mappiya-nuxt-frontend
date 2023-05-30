<script setup>
definePageMeta({
    layout: "auth",
    middleware: 'auth'
});
</script>

<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="d-flex justify-content-center w-100 mt-5">
            <div class="row w-100">
                <div class="d-none d-md-block col-md-6 scooter-man-logo border-end border-2 border-dark">
                    <img src="/img/scooter-man.png" />
                </div>
                <div class="col-md-5 d-flex flex-column p-5">
                    <div class="mb-3">
                        <h2 class="fw-bold">Login In to your Account</h2>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control py-3 shadow-sm" v-model="email" placeholder="E-mail">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control py-3 shadow-sm" v-model="password"
                            placeholder="Password">
                    </div>
                    <div class="mb-3 mt-2 d-flex flex-wrap flex-md-row justify-content-center justify-content-md-between">
                        <div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <a href="" class="text-dark">Forgot Password?</a>
                        </div>
                    </div>
                    <div class="mb-3 mt-2 d-flex flex-column flex-md-row justify-content-center justify-content-md-between">
                        <div class="text-center w-100 px-2">
                            <button class="btn btn-info shadow-sm w-100" @click="login">Log In</button>
                        </div>
                        <div class="text-center w-100 px-2 mt-2 mt-md-0">
                            <button class="btn btn-info shadow-sm w-100">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            user: null,
            pending: null,
            config: useRuntimeConfig()
        }
    },
    methods: {
        login() {
            useFetch(this.config.public['apiBase'] + 'sanctum/token',
                {
                    method: 'post',
                    body: {
                        device_name: navigator.userAgent,
                        email: this.email,
                        password: this.password
                    },
                }
            ).then((data) => {
                const token = useCookie('bearer_token');
                token.value = data.data.value;
                navigateTo('/restaurants');
            });
        }
    }
};
</script>
