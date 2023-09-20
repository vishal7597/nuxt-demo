<script setup>
    definePageMeta({
        layout: 'products',
    })
    const {data : products} = await useFetch('https://fakestoreapi.com/products');

    useHead({
        title: 'Product Listing Page',
        meta: [
            {name:'description', content: 'Product Listing Description'},
        ]
    })
</script>

<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>