<template>
    <ButtonText :active="active" @click="setStory"
        >{{ story }}
        <i v-if="active" class="fas fa-times relative top-[1px] ml-2"></i
    ></ButtonText>
</template>

<script setup>
import { useInfographicStore } from '@/stores/infographic'

const props = defineProps({
    story: {
        type: String,
        required: true,
    },
})

const { story } = toRefs(props)

const active = computed(() => {
    return useInfographicStore().story === story.value
})

function setStory() {
    active.value
        ? useInfographicStore().setStory('')
        : useInfographicStore().setStory(story.value)
}
</script>

<style></style>
