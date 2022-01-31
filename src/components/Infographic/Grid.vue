<template>
    <div
        class="grid grid-cols-6 gap-2"
        :class="{ 'double-fourth': doubleFourth }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        doubleFourth: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style scoped>
.double-fourth {
    grid-template-columns: 1fr 1fr 1fr 2fr 1fr;
    grid-gap: 0.5rem;
}
</style>
