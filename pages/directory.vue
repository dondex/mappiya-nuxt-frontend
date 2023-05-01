<script setup>
definePageMeta({
    middleware: 'auth'
});
</script>

<template>
    <ul>

    </ul>
</template>

<script>
export default {
    data() {
        return {
            restuarants: null,
            config: useRuntimeConfig()
        }
    },
    methods: {
        getRestaurantList() {
            useFetch(this.config.public['apiBase'] + 'restaurant',
                {
                    method: 'get',
                    headers: {
                        Authorization: 'Bearer ' + useCookie('bearer_token').value.token
                    },
                }
            ).then((response) => {
                console.log(response.data);
            });
        },
    },
    mounted() {
        this.getRestaurantList()
    },
}
</script>