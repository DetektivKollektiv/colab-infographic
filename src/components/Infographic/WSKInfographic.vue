<template>
    <div
        class="gap sticky top-[-1px] row-auto grid grid-cols-6 gap-2 bg-gradient-to-b from-white via-white pt-2"
        ref="navbar"
    >
        <div
            v-for="phase in WAS.phases"
            :key="phase"
            :class="{ 'col-span-2': phase.id == 4 }"
        >
            <div class="group relative flex flex-col items-center">
                <div
                    class="label-sm relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-500 bg-red-500 text-white"
                >
                    <span> {{ phase.id }} </span>
                </div>

                <p
                    :class="{ hidden: !isSticky }"
                    class="label-sm absolute mt-10 group-hover:block"
                >
                    {{ phase.text }}
                </p>

                <div
                    class="absolute -z-10 mt-4 max-h-0 overflow-hidden border-b-2 border-red-500 bg-gray-100 text-center transition-all duration-300 group-hover:max-h-64 group-hover:p-2"
                >
                    <p class="mt-12">
                        {{ phase.description }}
                    </p>
                </div>
                <div class="absolute mt-4 h-0.5 w-full bg-red-500">
                    <i
                        v-if="phase.id != 5"
                        class="fas fa-caret-right absolute right-0 mt-0.5 translate-x-full -translate-y-1/2 text-4xl text-red-500"
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

<style scoped>
.gap {
    grid-gap: 0.5rem;
}
</style>
