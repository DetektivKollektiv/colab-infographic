<template>
    <Hero :story="story" :state="state" @state="setState"></Hero>
    <WSK
        @change="setPhaseIndex"
        :phaseIndex="phaseIndex"
        class="absolute w-screen"
    ></WSK>
    <div
        v-if="state == 'uebersicht'"
        class="grid grid-cols-5 container-box my-24"
    >
        <div
            class="flex items-center flex-col text-center cursor-pointer"
            v-for="summary in story.phases"
            :key="summary"
        >
            <p class="w-3/4">
                {{ summary.text }}
            </p>
        </div>
    </div>
    <div v-if="state == 'phasen' || state == 'trends'" class="container-box">
        <div class="space-y-8 my-24">
            <Text>
                <template v-slot:title>
                    <h3>Wer</h3>
                </template>
                <template v-slot:description>
                    <p>
                        {{ getPhaseByIndex(phaseIndex).who }}
                    </p>
                </template>
            </Text>
            <Text>
                <template v-slot:title>
                    <h3>Wie</h3>
                </template>
                <template v-slot:description>
                    <p>
                        {{ getPhaseByIndex(phaseIndex).how }}
                    </p>
                </template>
            </Text>
        </div>
        <div v-if="state == 'phasen'">
            <Sources :sources="getPhaseByIndex(phaseIndex).sources"></Sources>
        </div>
    </div>
</template>

<script setup>
import Hero from '@/components/Story/Hero.vue'
import Text from '@/components/Story/Text.vue'
import WSK from '@/components/WSK.vue'
import Sources from '@/components/Sources.vue'

import { toRefs, ref, reactive } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'

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

const state = ref('phasen')

function setState(s) {
    state.value = s
}

watchEffect(() => {
    if (state.value == 'uebersicht' || state.value == 'trends') {
        phaseIndex.value = 6
    }
    console.log(state.value)
})
</script>
