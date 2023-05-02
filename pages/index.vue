<template>
    <div> 
      <Hero />
      <FoodCateg />
      <Restaurants />
      
    </div>
</template>

<script>
import Hero from '@/components/hero.vue'
import FoodCateg from '@/components/foodcateg.vue'
import Restaurants from '@/components/restaurants.vue'


export default {
  components: {
    Hero,
    FoodCateg,
    Restaurants,
    
  }
}
</script>