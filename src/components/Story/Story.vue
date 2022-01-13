<template>
    <Hero :story="story" :state="state" @state="setState"></Hero>
    <WSK
        v-if="active"
        @phaseIndex="setPhaseIndex"
        :phaseIndex="phaseIndex"
        class="absolute w-full"
    ></WSK>
    <div
        class="transition-all duration-300 overflow-y-hidden"
        :class="active ? 'max-h-[999px]' : 'max-h-[0px]'"
    >
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
                <p class="md:w-3/4 max-w-md text-sm">
                    {{ phase.summary.text }}
                </p>
            </div>
        </div>
        <div v-if="state == 'phasen' || state == 'trends'" class="">
            <div
                class="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 container-box"
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
                    class="md:h-auto flex-shrink scroll-mx-4 px-4 md:px-8 object-cover overflow-hidden"
                    v-for="image in getImages()"
                    :key="image"
                    :src="image"
                    alt=""
                    srcset=""
                />
            </div>
            <div v-if="state == 'phasen'">
                <Sources
                    :sources="getPhaseByIndex(phaseIndex).sources"
                ></Sources>
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
console.log({ story })
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
                  descriptions: story.value.phases.map((phase) => phase.who),
              },
              {
                  title: 'Wie',
                  descriptions: story.value.phases.map((phase) => phase.how),
              },
          ]
        : state.value == 'trends'
        ? [
              {
                  title: 'Makrotrends',
                  descriptions: [story.value.trends.makro],
              },
              {
                  title: 'Mesotrends',
                  descriptions: [story.value.trends.meso],
              },
          ]
        : []
}

function getImages() {
    console.log(phaseIndex.value)
    if (state.value == 'phasen') {
        return getPhaseByIndex(phaseIndex.value).images
            ? getPhaseByIndex(phaseIndex.value).images
            : []
    } else {
        return []
    }
}
</script>
