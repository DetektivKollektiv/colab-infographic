<template>
    <div
        class="w-full border-b-2 border-red-500 bg-gradient-to-b to-white pt-6"
    >
        <h3>
            <slot name="headline"></slot>
        </h3>
        <p class="pb-4" style="max-width: 66ch">
            <slot name="description"></slot>
        </p>
    </div>
</template>

<script>
export default {}
</script>

<style></style>
