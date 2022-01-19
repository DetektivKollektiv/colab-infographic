import { defineStore } from 'pinia'

export const useInfographicStore = defineStore('infographic', {
    state: () => ({
        /** @type {'story-1' | 'story-2' | 'story-3'} */
        story: '',
        modalContent: {},
        showModal: false,
    }),
    actions: {
        setStory(story) {
            this.story == story ? (this.story = '') : (this.story = story)
        },
        setModal(content) {
            this.modalContent = content
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        },
    },
})
