<template>
    <div class="w-full">
        <div
            class="grid grid-cols-5 row-auto gap-2 to-transparent sticky top-[-1px] pt-2"
        >
            <div v-for="phase in WAS.phases" :key="phase">
                <div class="flex flex-col relative items-center group">
                    <div
                        class="rounded-full flex justify-center items-center border-2 border-red-500 bg-red-500 w-8 h-8 text-white label-sm relative z-10"
                    >
                        <span> {{ phase.id }} </span>
                    </div>
                    <p
                        v-if="showText"
                        class="label-sm mt-10 group-hover:block absolute"
                    >
                        {{ phase.text }}
                    </p>
                    <div
                        class="h-0.5 bg-red-500 mt-4 absolute w-full"
                        :class="{
                            'w-1/2 right-0': phase.id == 1,
                            'w-1/2 left-0': phase.id == 5,
                        }"
                    >
                        <i
                            v-if="phase.id != 5"
                            class="fas fa-caret-right text-4xl text-red-500 absolute right-0 translate-x-full -translate-y-1/2 mt-0.5"
                        ></i>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="showDescription"
            class="flex md:grid w-full overflow-x-scroll snap-x grid-cols-5 relative z-20"
        >
            <div
                class="mt-6 w-full flex-shrink-0 text-center snap-center snap-mandatory"
                v-for="phase in WAS.phases"
                :key="phase"
            >
                <p class="label-sm mt-10">
                    {{ phase.text }}
                </p>
                <p class="snap-start">
                    {{ phase.description }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { WAS } from '@/api/infographic'

const props = defineProps({
    showDescription: {
        type: Boolean,
        default: false,
    },
    showText: {
        type: Boolean,
        default: false,
    },
})

const { showDescription, showText } = toRefs(props)
</script>
