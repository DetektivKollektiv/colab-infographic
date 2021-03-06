<template>
    <div>
        <div class="relative" :class="marginTopClass">
            <div class="absolute h-0.5 w-full">
                <div
                    class="relative h-0.5 w-full"
                    :style="{
                        paddingLeft: left / 2 + 'px',
                        paddingRight: right / 2 + 'px',
                    }"
                >
                    <div class="h-full w-full bg-red-500"></div>
                </div>
                <div
                    class="container-box relative z-20 flex justify-between"
                    ref="elementContainer"
                >
                    <div
                        v-for="phase in phasesWithZeros"
                        :key="phase.index"
                        @click="emit('phaseIndex', phase.index + 1)"
                        :ref="(element) => phasesElements.push(element)"
                    >
                        <div
                            v-if="typeof phase.title == 'string'"
                            class="relative flex cursor-pointer flex-col items-center"
                        >
                            <div
                                class="flex items-center justify-center rounded-full border-2 border-red-500 transition-all"
                                :class="
                                    phase.index + 1 < phaseIndex
                                        ? 'label-sm -mt-2 h-4 w-4 bg-red-500 text-white md:-mt-4 md:h-8 md:w-8'
                                        : phase.index + 1 > phaseIndex
                                        ? 'label-sm -mt-2 h-4 w-4 bg-white md:-mt-4 md:h-8 md:w-8'
                                        : 'label-xl -mt-4 h-8 w-8 bg-red-500 text-white  md:-mt-6 md:h-12 md:w-12'
                                "
                            >
                                <span
                                    :class="
                                        phase.index + 1 !== phaseIndex
                                            ? 'hidden md:block'
                                            : ''
                                    "
                                >
                                    {{ phase.index + 1 }}
                                </span>
                            </div>
                            <div class="text-center">
                                <p
                                    v-if="showTitle"
                                    class="transition-all"
                                    :class="[
                                        phase.index + 1 == phaseIndex ||
                                        phaseIndex > 5
                                            ? 'label-xl mt-2 md:mt-4'
                                            : 'label-sm mt-2',
                                        phase.index + 1 !== phaseIndex
                                            ? 'hidden md:block'
                                            : '',
                                    ]"
                                >
                                    {{ phase.title }}
                                </p>
                                <p
                                    v-if="showSummaries"
                                    class="mt-2 hidden max-w-xs px-4 lg:block"
                                >
                                    {{ summaries[phase.index] }}
                                </p>
                            </div>
                        </div>

                        <i
                            v-else
                            class="fas fa-caret-right -translate-y-1/2 text-4xl text-red-500"
                        ></i>
                    </div>
                </div>
            </div>
            <div v-if="showSummaries" class="container-box space-y-4 py-24">
                <div
                    v-for="(sum, i) in summaries"
                    :key="sum"
                    class="flex flex-col lg:hidden"
                >
                    <h2>{{ phases[i] }}</h2>
                    <p>
                        {{ sum }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { nextTick, onMounted, watchEffect } from '@vue/runtime-core'

const props = defineProps({
    phaseIndex: {
        type: Number,
    },
    showTitle: {
        type: Boolean,
        default: true,
    },
    showSummaries: {
        type: Boolean,
        default: false,
    },
    marginTop: {
        type: Boolean,
        default: false,
    },
    summaries: {
        type: Array,
        default: [],
    },
})

const { phaseIndex, showTitle, showSummaries, marginTop, summaries } =
    toRefs(props)

const phases = [
    'Initiieren',
    'Produzieren',
    'Platzieren',
    'Verbreiten',
    'Beeinflussung',
]

function insertZeros(array) {
    return array.reduce((acc, title, i) => {
        acc.push({ title, index: i })
        if (i + 1 !== array.length) {
            acc.push(0)
        }
        return acc
    }, [])
}

const phasesWithZeros = insertZeros(phases)

const emit = defineEmits(['phaseIndex', 'height'])

const marginTopClass = computed(() => {
    if (marginTop.value) {
        if (phaseIndex.value > phases.length) {
            return 'mt-2 md:mt-4'
        } else {
            return 'mt-3 md:mt-6'
        }
    } else {
        return ''
    }
})

const elementContainer = ref(null)
const { height: elementContainerHeight } = useElementBounding(elementContainer)

watchEffect(() => emit('height', elementContainerHeight))

const phasesElements = ref([])
const left = ref(0)
const right = ref(0)

function setPadding() {
    const first = phasesElements.value[0]
    const last = phasesElements.value[phasesElements.value.length - 1]

    left.value = first.getBoundingClientRect().x * 2 + first.offsetWidth
    right.value =
        (window.innerWidth - last.getBoundingClientRect().right) * 2 +
        last.offsetWidth
}

onMounted(() => setPadding())

watch([phaseIndex, showTitle, showSummaries, marginTop, summaries], () =>
    nextTick(() => setPadding())
)

useEventListener(window, 'resize', () => {
    setPadding()
})
</script>

<style scoped>
.arrow-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 12px solid rgba(252, 95, 87, var(--tw-border-opacity));
}
</style>
