<template>
    <div>
        <div class="text-2xl text-purple-700 font-bold">
            <h1>{{ content.chapter }}</h1>
        </div>
        <div class="-mt-2">
            <h2>{{ content.headline }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style></style>
