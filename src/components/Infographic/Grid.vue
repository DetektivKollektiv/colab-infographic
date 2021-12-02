<template>
    <div
        class="grid gap-2 grid-cols-6"
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
}
</style>
