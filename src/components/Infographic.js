import { getInfographicData } from '@/api/infographic'
import { h } from '@vue/runtime-core'

import Infographic_card from '@/components/Infographic_card.vue'
import Infographic_container from '@/components/Infographic_container.vue'
import Infographic_chapter_headline from '@/components/Infographic_chapter_headline.vue'

export const ELEMENT_STYLES = {
    default: {},
    container: {},
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
    },
    card: {},
    chapter_headline: {},
}

export const ELEMENTS = {
    default: 'div',
    container: Infographic_container,
    column: 'div',
    row: 'div',
    card: Infographic_card,
    chapter_headline: Infographic_chapter_headline,
}

export const Infographic = {
    data() {
        return {
            data: { type: 'default' },
            loading: true,
        }
    },
    mounted() {
        this.getInfographicData()
    },
    methods: {
        getInfographicData: function () {
            getInfographicData().then((response) => {
                this.data = response
                this.loading = false
            })
        },
        renderElement(element) {
            return h(
                ELEMENTS[element.type],
                {
                    style: element.style,
                    content: element.content,
                },
                {
                    default: () => {
                        return element.children
                            ? element.children.map((child) => {
                                  return this.renderElement(child)
                              })
                            : {}
                    },
                }
            )
        },
    },
    render() {
        return this.renderElement(this.data)
    },
}
