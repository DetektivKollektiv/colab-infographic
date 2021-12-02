<template>
    <div>
        <div class="text-xl text-purple-500 font-bold">
            <h1>{{ content.headline }}</h1>
        </div>
        <div>
            <h2>{{ content.subheadline }}</h2>
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
