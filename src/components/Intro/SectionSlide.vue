<script>
export default {
    props: ['text', 'color'],
}
</script>

<template>
    <div :class="color" class="absolute top-0 h-screen w-screen">
        <h1>{{ text }}</h1>
    </div>
</template>
