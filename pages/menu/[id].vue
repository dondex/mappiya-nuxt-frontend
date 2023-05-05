<script setup>
definePageMeta({
    middleware: 'auth'
});
const route = useRoute();

const { data: restaurants } = useLazyFetch(useRuntimeConfig().public['apiBase'] + 'categories/' + route.params.id,
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
        <div class="row" v-if="restaurants">
            <div class="col-md-4" v-for="item in restaurants.data" :key="item.id">
                <div class="card my-2" >
                    <img :src="item.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <h6>{{ item.category }}</h6>
                        <p class="card-text">{{ item.description }}</p>
                        <span>{{ item.selling_price }}</span>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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