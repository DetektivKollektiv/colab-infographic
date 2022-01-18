<template>
    <div class="container-box pt-12">
        <div
            class="flex flex-col flex-wrap md:flex-row justify-between space-y-8 md:space-y-0"
        >
            <div class="flex-shrink-0 md:mr-12">
                <Text
                    :texts="texts"
                    :phaseIndex="phaseIndex"
                    @phaseIndex="(index) => emit('phaseIndex', index)"
                >
                </Text>
            </div>
            <img
                class="md:h-auto object-cover max-w-xl"
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
        <ButtonText
            @click="emit('next')"
            class="float-right mb-8 md:mb-12 hidden md:block"
            >Weiter</ButtonText
        >
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
