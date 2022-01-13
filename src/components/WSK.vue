<template>
    <div>
        <div class="relative">
            <div class="h-0.5 absolute bg-red-500 z-0 w-full">
                <div
                    class="flex w-full z-10 relative justify-between container-box"
                >
                    <div
                        v-for="(phaseText, i) in phases"
                        :key="i"
                        @click="emit('phaseIndex', i + 1)"
                    >
                        <div
                            v-if="typeof phaseText == 'string'"
                            class="flex flex-col cursor-pointer relative items-center"
                        >
                            <div
                                class="rounded-full flex justify-center items-center border-2 border-red-500 transition-all"
                                :class="
                                    i + 1 < phaseIndex
                                        ? 'bg-red-500 w-4 h-4 md:w-8 md:h-8 -mt-2 md:-mt-4 text-white label-sm'
                                        : i + 1 > phaseIndex
                                        ? 'bg-white w-4 h-4 md:w-8 md:h-8 -mt-2 md:-mt-4 label-sm'
                                        : 'w-8 h-8 md:w-12 md:h-12 -mt-4 md:-mt-6  label-xl bg-red-500 text-white'
                                "
                            >
                                <span
                                    :class="
                                        i + 1 !== phaseIndex
                                            ? 'hidden md:block'
                                            : ''
                                    "
                                >
                                    {{ i + 1 }}
                                </span>
                            </div>
                            <div class="text-center">
                                <p
                                    v-if="showTitle"
                                    class="transition-all"
                                    :class="[
                                        i + 1 == phaseIndex
                                            ? 'label-xl mt-6 md:mt-8'
                                            : 'label-sm mt-6',
                                        i + 1 !== phaseIndex
                                            ? 'hidden md:block'
                                            : '',
                                    ]"
                                >
                                    {{ phaseText }}
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
    0,
    'Produzieren',
    0,
    'Platzieren',
    0,
    'Verbreiten',
    0,
    'Beeinflussung',
]

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
