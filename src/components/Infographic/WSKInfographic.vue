<template>
    <div
        class="grid grid-cols-6 row-auto gap-2 bg-gradient-to-b from-white via-white to-transparent sticky top-[-1px] pt-2"
        ref="navbar"
    >
        <div
            v-for="phase in WAS.phases"
            :key="phase"
            :class="{ 'col-span-2': phase.id == 4 }"
        >
            <div class="flex flex-col relative items-center group">
                <div
                    class="rounded-full flex justify-center items-center border-2 border-red-500 bg-red-500 w-8 h-8 text-white label-sm relative z-10"
                >
                    <span> {{ phase.id }} </span>
                </div>

                <p
                    :class="{ hidden: !isSticky }"
                    class="label-sm mt-10 group-hover:block absolute"
                >
                    {{ phase.text }}
                </p>

                <div
                    class="max-h-0 group-hover:max-h-64 duration-300 transition-all overflow-hidden text-center absolute bg-gray-100 group-hover:p-2 mt-4 -z-10 border-b-2 border-red-500"
                >
                    <p class="mt-12">
                        {{ phase.description }}
                    </p>
                </div>
                <div class="h-0.5 w-full bg-red-500 mt-4 absolute">
                    <i
                        v-if="phase.id != 5"
                        class="fas fa-caret-right text-4xl text-red-500 absolute right-0 translate-x-full -translate-y-1/2 mt-0.5"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { WAS } from '@/api/infographic'
import { onMounted, watch, watchEffect } from '@vue/runtime-core'

const navbar = ref(null)
const isSticky = ref(false)

useIntersectionObserver(
    navbar,
    ([e]) => {
        e.intersectionRatio < 1
            ? (isSticky.value = false)
            : (isSticky.value = true)
    },
    { threshold: [1] }
)
</script>
