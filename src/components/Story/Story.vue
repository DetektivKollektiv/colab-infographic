<template>
    <Hero :story="story"></Hero>
    <WSK @change="setPhaseIndex" :phaseIndex="phaseIndex"></WSK>
    <div class="space-y-8 mt-8 container-box">
        <WerWie>
            <template v-slot:title>
                <h3>Wer</h3>
            </template>
            <template v-slot:description>
                <p>
                    {{ getPhaseByIndex(phaseIndex).who }}
                </p>
            </template>
        </WerWie>
        <WerWie>
            <template v-slot:title>
                <h3>Wie</h3>
            </template>
            <template v-slot:description>
                <p>
                    {{ getPhaseByIndex(phaseIndex).how }}
                </p>
            </template>
        </WerWie>
    </div>
</template>

<script setup>
import Hero from '@/components/Story/Hero.vue'
import WerWie from '@/components/Story/WerWie.vue'
import WSK from '@/components/WSK.vue'

import { toRefs, ref } from '@vue/reactivity'

const props = defineProps({
    story: {
        type: Object,
        required: true,
    },
})

const { story } = toRefs(props)
const phaseIndex = ref(1)

function setPhaseIndex(i) {
    phaseIndex.value = i
}

function getPhaseByIndex(i) {
    return story.value.phases.find((obj) => obj.phase === i)
}
</script>
