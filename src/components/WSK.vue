<template>
    <div class="relative">
        <div class="w-full h-0.5 absolute bg-red-500 z-0 flex items-center">
            <div
                class="grid grid-cols-5 container-box z-10 relative items-center"
            >
                <div class="flex items-center flex-col" v-for="i in 5" :key="i">
                    <div
                        class="rounded-full flex justify-center items-center label-sm"
                        :class="
                            i < index
                                ? 'bg-red-500 w-8 h-8 text-white'
                                : i > index
                                ? 'bg-white w-8 h-8 border-2 border-red-500 '
                                : 'w-12 h-12 label-xl bg-red-500 text-white'
                        "
                    >
                        <p class="">{{ i }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-5 container-box">
            <div
                class="flex items-center flex-col text-center"
                v-for="i in 5"
                :key="i"
            >
                <p
                    v-if="showTitle"
                    class=""
                    :class="i == index ? 'label-xl mt-8' : 'label-sm mt-6'"
                >
                    Initiieren
                </p>
                <p v-if="showDescription" class="w-3/4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquam illo maxime fugiat corrupti adipisci.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { toRefs } from '@vue/reactivity'

const props = defineProps({
    index: {
        type: Number,
        default: 3,
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

const { index } = toRefs(props)
</script>
