<template>
    <div> 
      <Hero />
      <FoodCateg />
    </div>
</template>

<script>
import Hero from '@/components/hero.vue'
import FoodCateg from '@/components/foodcateg.vue'

export default {
  components: {
    Hero,
    FoodCateg
  }
}
</script>