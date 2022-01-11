<template>
    <Hero :story="story" :state="state" @state="setState"></Hero>
    <WSK
        @change="setPhaseIndex"
        :phaseIndex="phaseIndex"
        class="absolute w-screen"
    ></WSK>
    <div
        v-if="state == 'uebersicht'"
        class="grid grid-rows-5 md:grid-cols-5 container-box my-12"
    >
        <div
            class="md:flex items-center flex-col md:text-center cursor-pointer"
            v-for="phase in story.phases"
            :key="phase"
        >
            <h3 class="md:hidden">{{ phase.title }}</h3>
            <p class="md:w-3/4 max-w-md text-sm">{{ phase.summary.text }}</p>
        </div>
    </div>
    <div v-if="state == 'phasen' || state == 'trends'" class="container-box">
        <div class="space-y-8 my-24">
            <Text v-for="text in getTexts()" :key="text">
                <template v-slot:title>
                    <h3>{{ text.title }}</h3>
                </template>
                <template v-slot:description>
                    <p>
                        {{ text.description }}
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
import { watchEffect, watch } from '@vue/runtime-core'

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
    return story.value.phases.find((obj) => obj.phaseIndex === i)
}

const state = ref('phasen')

function setState(s) {
    state.value = s
}

watch(state, () => {
    if (state.value == 'uebersicht' || state.value == 'trends') {
        phaseIndex.value = 6
    }
    if (state.value == 'phasen' && phaseIndex.value == 6) {
        phaseIndex.value = 1
    }
})

watch(phaseIndex, () => {
    if (phaseIndex.value !== 6) {
        state.value = 'phasen'
    }
})

function getTexts() {
    return state.value == 'phasen'
        ? [
              {
                  title: 'Wer',
                  description: getPhaseByIndex(phaseIndex.value).who,
              },
              {
                  title: 'Wie',
                  description: getPhaseByIndex(phaseIndex.value).how,
              },
          ]
        : state.value == 'trends'
        ? [
              {
                  title: 'Makrotrends',
                  description: story.value.trends.makro,
              },
              {
                  title: 'Mesotrends',
                  description: story.value.trends.meso,
              },
          ]
        : []
}
</script>
