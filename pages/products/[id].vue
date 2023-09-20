<script setup>

const {id} = useRoute().params;

definePageMeta({
    layout: 'products',
});

const url = 'https://fakestoreapi.com/products/' + id;
const {data : product} = await useFetch(url);

if (!product.value) {
    throw createError({statusCode: 404, message:'Product not found', fatal:true});
}
</script>

<template>
    <div>
        <Head>
            <Title>{{product.title}}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetails :product="product"/>
    </div>
</template>

<style lang="scss" scoped>

</style>