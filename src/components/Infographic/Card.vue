<template>
    <div
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="infographicStore.setModal(content)"
        class="px-4 py-2 bg-white rounded-md w-full transition-all overflow-hidden cursor-pointer"
        :class="{
            'duration-75 border-2 border-red-500': active,
            'opacity-20 pointer-events-none': deactivate,
        }"
    >
        <div class="group">
            <p class="group-hover:text-red-500 label-md">
                {{ content.title }}
            </p>
        </div>
        <div :class="{ 'pb-2 pt-4 space-y-2': activeMassnahmen.length > 0 }">
            <p
                class="cursor-pointer px-2 border-red-500 border-2 rounded-lg font-bold"
                :class="{
                    'text-red-500':
                        infographicStore.massnahmeHover == massnahme.title,
                }"
                v-for="massnahme in activeMassnahmen"
                :key="massnahme.title"
                @click="infographicStore.setModal(massnahme)"
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
import massnahmen from '@/api/massnahmen_template.json'

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
