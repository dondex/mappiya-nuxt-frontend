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
    console.log(response)
})
</script>

<template>
    <div class="container vh-100 d-flex align-items-center justify-content-center">
        <div class="card">
            <div class="card-body">
                <ul v-if="restaurants">
                    <li v-for="item in restaurants.data" :key="item.id">
                        {{ item }}
                        <NuxtLink :to="{ path: '/menu/' + item.id}" class="btn btn-primary">Go To</NuxtLink>
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
            restaurants: null,
            config: useRuntimeConfig()
        }
    },
    methods: {
    },
    mounted() {
    },
}
</script>