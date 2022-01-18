<template>
    <div
        class="relative h-[70rem] md:h-[85rem] lg:h-[70rem] min-h-[600px] overflow-hidden bg-yellow-500"
    >
        <div
            class="rounded-full w-[500vw] h-[500vw] mb-[2rem] md:mb-[3rem] absolute bottom-0 -translate-x-1/2 left-1/2 flex justify-center text-center bg-yellow-300"
        ></div>
        <div
            class="rounded-full w-[500vw] h-[500vw] mb-[26rem] md:mb-[37rem] absolute bottom-0 -translate-x-1/2 left-1/2 flex justify-center text-center bg-white"
        ></div>
        <div
            class="absolute bottom-0 flex justify-center z-10 mb-[6rem] md:mb-[9rem] w-screen"
        >
            <div class="container-box w-full flex justify-center">
                <TextBlock class="text-center">
                    <template v-slot:subtitle>
                        <p class="font-serif">
                            {{ trends.subtitle }}
                        </p>
                    </template>
                    <template v-slot:title>
                        <h1>{{ trends.title }}</h1>
                    </template>
                    <template v-slot:description>
                        <p>
                            {{ trends.description }}
                        </p>
                    </template>
                </TextBlock>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    trends: {
        type: Object,
        required: true,
    },
})

const { trends } = toRefs(props)
</script>
<style lang=""></style>
