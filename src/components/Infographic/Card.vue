<template>
    <div
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="infographicStore.setModal(content)"
        class="w-full cursor-pointer overflow-hidden rounded-md bg-white px-4 py-2 transition-all"
        :class="{
            'border-2 border-red-500 duration-75': active,
            'pointer-events-none opacity-20': deactivate,
        }"
    >
        <div class="group">
            <p class="label-md group-hover:text-red-500">
                {{ content.title }}
            </p>
        </div>
        <div :class="{ 'space-y-2 pb-2 pt-4': activeMassnahmen.length > 0 }">
            <p
                class="cursor-pointer rounded-lg border-2 border-red-500 px-2 font-bold"
                :class="{
                    'text-red-500':
                        infographicStore.massnahmeHover == massnahme.title,
                }"
                v-for="massnahme in activeMassnahmen"
                :key="massnahme.title"
                @click.prevent.stop="infographicStore.setModal(massnahme)"
                @mouseenter="infographicStore.massnahmeHover = massnahme.title"
                @mouseleave="infographicStore.massnahmeHover = ''"
            >
                {{ massnahme.title }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import { useInfographicStore } from '@/stores/infographic'
import { massnahmen } from '@/api/massnahmen.js'

const infographicStore = useInfographicStore()

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
})

const { content } = toRefs(props)

const active = computed(() => {
    return content.value.stories.includes(infographicStore.story)
})

const deactivate = computed(() => {
    if (infographicStore.story !== '') {
        return !content.value.stories.includes(infographicStore.story)
    } else if (infographicStore.massnahme !== '') {
        return !massnahmen[infographicStore.massnahme].content.some(
            (massnahme) => content.value.massnahmen.includes(massnahme.title)
        )
    } else {
        return false
    }
})

const activeMassnahmen = computed(() => {
    if (massnahmen[infographicStore.massnahme]) {
        return massnahmen[infographicStore.massnahme].content.filter(
            (massnahme) => content.value.massnahmen.includes(massnahme.title)
        )
    } else {
        return []
    }
})
</script>
