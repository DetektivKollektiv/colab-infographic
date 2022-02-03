<template>
    <div>
        <div class="relative z-20">
            <Hero
                :story="story"
                :state="state"
                @state="setState"
                :active="active"
            ></Hero>
            <WSK
                v-if="active"
                @phaseIndex="setPhaseIndex"
                @height="setMarginTop"
                :phaseIndex="phaseIndex"
                :marginTop="false"
                :border="true"
                :showSummaries="state == 'uebersicht'"
                :summaries="summaries"
                class="absolute w-full"
            ></WSK>
        </div>
        <div
            class="transition-all duration-300 overflow-hidden bg-gradient-to-b from-white to-yellow-300"
            :class="active ? `max-h-[4000px];` : 'max-h-[0px]'"
        >
            <div v-if="state == 'phasen'" :style="{ marginTop }">
                <Phasen
                    :texts="getTexts()"
                    :phaseIndex="phaseIndex"
                    @phaseIndex="setPhaseIndex"
                    :images="getImages()"
                    :sources="getPhaseByIndex(phaseIndex).sources"
                    @next="next"
                ></Phasen>
            </div>

            <div v-if="state == 'uebersicht'">
                <Uebersicht :trends="story.trends"></Uebersicht>
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

function next() {
    if (phaseIndex.value <= 4) {
        phaseIndex.value += 1
    } else {
        state.value = 'uebersicht'
    }
}

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
    if (state.value == 'uebersicht') {
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
    if (state.value == 'phasen') {
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
    } else {
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

const marginTop = ref(0)

function setMarginTop(height) {
    marginTop.value = height.value + 'px'
}
</script>
