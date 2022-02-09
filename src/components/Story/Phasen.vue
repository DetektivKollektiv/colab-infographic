<template>
    <div class="container-box pt-12">
        <div
            class="flex flex-col flex-wrap justify-between space-y-8 md:flex-row md:space-y-0"
        >
            <div class="md:w-8/12 flex-shrink-0 md:mr-12">
                <Text
                    :texts="texts"
                    :phaseIndex="phaseIndex"
                    @phaseIndex="(index) => emit('phaseIndex', index)"
                >
                </Text>
                <ButtonText
                    @click="emit('next')"
                    class="float-right mb-8 hidden md:mb-12 md:block"
                    :class="{ 'animate-scale': phaseIndex == 1 }"
                    >Weiter</ButtonText
                >
            </div>
            <img
                class="md:w-3/12 max-w-xl object-contain md:h-auto"
                v-for="image in images"
                :key="image"
                :src="image"
                alt=""
                srcset=""
            />
        </div>
        <div class="mb-8 md:mb-12">
            <Sources :sources="sources"></Sources>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    texts: {
        type: Array,
        required: true,
    },
    phaseIndex: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    sources: {
        type: Array,
        required: true,
    },
})

const { texts, phaseIndex, images, sources } = toRefs(props)

const emit = defineEmits(['phaseIndex', 'next'])
</script>
<style lang=""></style>
