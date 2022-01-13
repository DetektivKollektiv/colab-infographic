<template>
    <div>
        <div class="relative">
            <div class="h-0.5 absolute bg-red-500 z-0 w-full">
                <div
                    class="flex w-full z-10 relative justify-between container-box"
                >
                    <div
                        v-for="phase in phasesWithZeros"
                        :key="phase.index"
                        @click="emit('phaseIndex', phase.index + 1)"
                    >
                        <div
                            v-if="typeof phase.title == 'string'"
                            class="flex flex-col cursor-pointer relative items-center"
                        >
                            <div
                                class="rounded-full flex justify-center items-center border-2 border-red-500 transition-all"
                                :class="
                                    phase.index + 1 < phaseIndex
                                        ? 'bg-red-500 w-4 h-4 md:w-8 md:h-8 -mt-2 md:-mt-4 text-white label-sm'
                                        : phase.index + 1 > phaseIndex
                                        ? 'bg-white w-4 h-4 md:w-8 md:h-8 -mt-2 md:-mt-4 label-sm'
                                        : 'w-8 h-8 md:w-12 md:h-12 -mt-4 md:-mt-6  label-xl bg-red-500 text-white'
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
                                        phase.index + 1 == phaseIndex
                                            ? 'label-xl mt-6 md:mt-8'
                                            : 'label-sm mt-6',
                                        phase.index + 1 !== phaseIndex
                                            ? 'hidden md:block'
                                            : '',
                                    ]"
                                >
                                    {{ phase.title }}
                                </p>
                                <p v-if="showDescription" class="w-3/4">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Aliquam illo maxime fugiat
                                    corrupti adipisci.
                                </p>
                            </div>
                        </div>

                        <i
                            v-else
                            class="fas fa-caret-right text-4xl text-red-500 -translate-y-1/2"
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    phaseIndex: {
        type: Number,
    },
    showTitle: {
        type: Boolean,
        default: true,
    },
    showDescription: {
        type: Boolean,
        default: false,
    },
})

const { phaseIndex, showTitle, showDescription } = toRefs(props)

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

const emit = defineEmits(['phaseIndex'])
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
