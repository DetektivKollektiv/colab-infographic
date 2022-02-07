<template>
    <div
        class="relative h-[70rem] min-h-[600px] overflow-hidden bg-yellow-500 md:h-[85rem] lg:h-[60rem]"
    >
        <div
            class="absolute bottom-0 left-1/2 mb-[2rem] flex h-[500vw] w-[500vw] -translate-x-1/2 justify-center rounded-full bg-yellow-300 text-center md:mb-[3rem]"
        ></div>
        <div
            class="absolute bottom-0 left-1/2 mb-[26rem] flex h-[500vw] w-[500vw] -translate-x-1/2 justify-center rounded-full bg-white text-center md:mb-[37rem]"
        ></div>
        <div
            class="absolute bottom-0 z-10 mb-[6rem] flex w-screen justify-center md:mb-[13rem]"
        >
            <div class="container-box flex w-full justify-center">
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
