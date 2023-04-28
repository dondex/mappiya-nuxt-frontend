<template>
    <div>
        <p>Restaurant Details for {{ id }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident possimus reprehenderit cum illum nihil facere ex fugit soluta optio nobis officiis, unde, nisi obcaecati at tempora? Deleniti tenetur quae veniam?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'restaurants'
    })
</script>

<style  scoped>

</style>