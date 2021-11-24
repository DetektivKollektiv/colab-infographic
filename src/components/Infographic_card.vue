<template>
    <div class="p-4 bg-gray-300 rounded-md w-56">
        <h5 class="text-2xl">{{ content.title }}</h5>
        <p class="font-bold">{{ content.example }}</p>
        <p>{{ content.description }}</p>
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
