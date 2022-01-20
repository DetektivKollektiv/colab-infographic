<template>
    <div
        class="w-full border-red-500 bg-gradient-to-b from-transparent to-white pt-6 border-b-2 pl-2"
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
