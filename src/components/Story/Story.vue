<template>
    <div class="">
        <Hero :story="story" :state="state" @state="setState"></Hero>
        <WSK
            v-if="active"
            @phaseIndex="setPhaseIndex"
            :phaseIndex="phaseIndex"
            :marginTop="false"
            :border="true"
            :showSummaries="state == 'uebersicht'"
            :summaries="summaries"
            class="absolute w-full"
        ></WSK>
        <!--    -->
        <div
            class="transition-all duration-300 overflow-y-hidden"
            :class="active ? 'max-h-[1200px]' : 'max-h-[0px]'"
        >
            <div v-if="state == 'phasen' || state == 'trends'" class="">
                <div
                    class="flex flex-col flex-wrap md:flex-row justify-between space-y-8 md:space-y-0 container-box"
                    :class="active ? 'my-24 md:my-36' : ''"
                >
                    <div class="space-y-8 flex-shrink-0 md:mr-12">
                        <Text
                            :texts="getTexts()"
                            :phaseIndex="phaseIndex"
                            @phaseIndex="setPhaseIndex"
                        >
                        </Text>
                    </div>
                    <img
                        class="md:h-auto object-cover max-w-xl"
                        v-for="image in getImages()"
                        :key="image"
                        :src="image"
                        alt=""
                        srcset=""
                    />
                </div>
                <div
                    v-if="state == 'phasen'"
                    class="container-box mb-12 md:mb-16"
                >
                    <Sources
                        :sources="getPhaseByIndex(phaseIndex).sources"
                    ></Sources>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    story: {
        type: Object,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
})

const { story, active } = toRefs(props)
const phaseIndex = ref(1)

const summaries = story.value.phases.map((phase) => phase.summary.text)

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

const texts = reactive([])

watch(phaseIndex, () => {
    texts.value = getTexts()
    if (phaseIndex.value !== 6) {
        state.value = 'phasen'
    }
})

const isMd = useMediaQuery('(max-width: 768px)')

const getTexts = () => {
    switch (state.value) {
        case 'phasen':
            return [
                {
                    title: 'Wer',
                    descriptions: isMd.value
                        ? story.value.phases.map((phase) => phase.who)
                        : [
                              story.value.phases.map((phase) => phase.who)[
                                  phaseIndex.value - 1
                              ],
                          ],
                },
                {
                    title: 'Wie',
                    descriptions: isMd.value
                        ? story.value.phases.map((phase) => phase.how)
                        : [
                              story.value.phases.map((phase) => phase.how)[
                                  phaseIndex.value - 1
                              ],
                          ],
                },
            ]
        default:
            return []
    }
}

function getImages() {
    if (state.value == 'phasen') {
        return getPhaseByIndex(phaseIndex.value).images
            ? getPhaseByIndex(phaseIndex.value).images
            : []
    } else {
        return []
    }
}
</script>
