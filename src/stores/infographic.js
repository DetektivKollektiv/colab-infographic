import { defineStore } from 'pinia'

export const useInfographicStore = defineStore('infographic', {
    state: () => {
        return {
            /** @type {'story-1' | 'story-2' | 'story-3'} */
            story: '',
        }
    },
    actions: {
        setStory(story) {
            this.story == story ? (this.story = '') : (this.story = story)
        },
    },
})
