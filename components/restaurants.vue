<template>
    <div>
      <section id="restaurants" class="restaurants section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title text-dark">
            <h2 class="text-start">Restaurants</h2>
          </div>

          <div class="row">
            <div v-for="restaurant in restaurants" :key="restaurant.id" class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <!-- <NuxtLink :to="'/restaurant/' + restaurant.id">
                    <img :src="getImageUrl(restaurant.logo)" class="img-fluid" :alt="restaurant.name" />
                  </NuxtLink> -->
                  <a href="#">
                    <img :src="getImageUrl(restaurant.logo)" class="img-fluid" :alt="restaurant.name" />
                  </a>

                  <div class="social">
                    <a :href="restaurant.twitter"><i class="bi bi-twitter"></i></a>
                    <a :href="restaurant.facebook"><i class="bi bi-facebook"></i></a>
                    <a :href="restaurant.instagram"><i class="bi bi-instagram"></i></a>
                    <a :href="restaurant.linkedin"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>{{ restaurant.name }}</h4>
                  <span>{{ restaurant.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
// import { NuxtLink } from 'nuxt-link'

// import jsonData from '../data/data.json'
import logo1 from "/img/jollibee-logo.jpg"
import logo2 from "/img/eben-logo.jpg"
import logo3 from "/img/kuys-logo.jpg"
import logo4 from "/img/bulalohan-logo.jpg"
import logo5 from "/img/taster-logo.jpg"
import logo6 from "/img/islas-logo1.jpg"
import logo7 from "/img/euro-logo1.png"


export default {
  // components: {
  //   NuxtLink,
    
  // },
  data() {
    return {
      restaurants: [
        {
          id: 1,
          name: "Jollibee",
          logo: logo1, 
        },
        {
          id: 2,
          name: "Eben Ezar",
          logo: logo2,
        },
        {
          id: 3,
          name: "Kuys Restaurant",
          logo: logo3,
        },
        {
          id: 4,
          name: "Bulalohan sa Riyadh",
          logo: logo4,
        },
        {
          id: 5,
          name: "Taster's House",
          logo: logo5,
        },
        {
          id: 6,
          name: "Islas Resto & Grill",
          logo: logo6,
        },
        {
          id: 7,
          name: "Euro Asia Restaurant",
          logo: logo7,
        },
      ]
    }
  },
  methods: {
    getImageUrl(logo) {
      return logo;
    },
  },
};
</script>

<style scoped>

</style>