import { defineStore } from 'pinia'
import stories from '@/api/stories.json'

export const useInfographicStore = defineStore('infographic', {
    state: () => ({
        /** @type {'story-1' | 'story-2' | 'story-3'} */
        story: '',
        storyContent: [],
        modalContent: {},
        showModal: false,
        massnahme: '',
    }),
    actions: {
        setStory(story) {
            this.story == story ? (this.story = '') : (this.story = story)
            this.storyContent = stories
                .filter((story) => story.title == this.story)[0]
                .phases.map((phase) => phase.summary.text)
        },
        setModal(content) {
            this.modalContent = content
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        },
        setMassnahme(massnahme) {
            console.log(massnahme)
            this.massnahme = massnahme
        },
    },
})
