<script setup>
definePageMeta({
    middleware: 'auth'
});

const { data: restaurants } = useLazyFetch(useRuntimeConfig().public['apiBase'] + 'restaurant',
    {
        method: 'get',
        headers: {
            Authorization: 'Bearer ' + useCookie('bearer_token').value.token
        },
    }
)
watch(restaurants, (response) => {
})
</script>

<template>
    <div class="container vh-100 d-flex align-items-center justify-content-center">
        <div class="card">
            <div class="card-body">
                <ul>
                    <li v-for="item in restaurants.data">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
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
    },
    mounted() {
    },
}
</script>