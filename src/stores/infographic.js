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
        massnahmeHover: '',
    }),
    actions: {
        setStory(story) {
            this.massnahme = ''
            this.story = story
            if (this.story) {
                this.storyContent = stories
                    .filter((story) => story.title == this.story)[0]
                    .phases.map((phase) => phase.summary.text)
            }
        },
        setModal(content) {
            console.log('setModal', content)
            this.modalContent = content
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        },
        setMassnahme(massnahme) {
            this.story = ''
            this.massnahme = massnahme
        },
    },
})
