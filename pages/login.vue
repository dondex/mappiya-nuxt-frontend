<script setup>
definePageMeta({
    middleware: 'auth'
});
</script>

<template>
    <div class="container vh-100 d-flex align-items-center justify-content-center">
        <div class="d-flex justify-content-center">
            <div class="d-flex">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-column">
                            <div class="mb-3">
                                <label for="">E-mail</label>
                                <input type="text" class="form-control" v-model="email">
                            </div>
                            <div class="mb-3">
                                <label for="">Password</label>
                                <input type="password" class="form-control" v-model="password">
                            </div>
                            <div class="mt-4">
                                <button class="btn btn-primary w-100" @click="login">Sign In</button>
                            </div>
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
            email: 'roosevelt.kilback@example.com',
            password: 'password',
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
                navigateTo('/directory');
            });
        }
    }
};
</script>
