<script>
export default {
    props: ['text', 'color']
}
</script>

<template>
        <div :class="color" class="h-screen w-screen absolute top-0">
            <h1>{{ text }}</h1>
        </div>
</template>

