<template>
    <div>
        <div class="text-red-500">
            <p class="label-xl">{{ content.headline }}</p>
        </div>
        <div>
            <p>{{ content.subheadline }}</p>
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
