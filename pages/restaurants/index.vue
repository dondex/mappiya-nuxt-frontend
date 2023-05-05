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
    <div class="container-fluid vh-100" style="margin-top: 15%">
        <div class="row" v-if="restaurants">
            <div class="col-4" v-for="item in restaurants.data" :key="item.id" >
                <div class="card my-2" >
                    <div class="card-image">
                        <div :id="'map-container-' + item.id"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">{{ item.address }}</p>
                        <NuxtLink :to="{ path: '/menu/' + item.id}" class="btn btn-primary">Go To</NuxtLink>
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
