import { ELEMENT_STYLES } from '@/components/Infographic.js'

let layerIndex = 0

const columnRowStyle = {
    backgroundColor: 'rgb(243, 244, 246)',
    padding: '10px',
    margin: '5px',
    borderRadius: '10px',
}

function isColumnOrRow(element) {
    return element.type == 'row' || element.type == 'column'
}

function isColumnOrRowinChilds(element) {
    return element.children.some((child) => isColumnOrRow(child))
}

function applyColumnRowStyle(element) {
    if (isColumnOrRow(element)) {
        if (layerIndex == 1 && !isColumnOrRowinChilds(element)) {
            element.style = {
                ...element.style,
                ...columnRowStyle,
            }
        }
        if (layerIndex == 2) {
            element.style = {
                ...element.style,
                ...columnRowStyle,
            }
        }
    }
}

function iterate(element) {
    layerIndex++
    element.children.forEach((child) => {
        assignDefaultElement(child)
    })
    layerIndex--
}

function assignDefaultElement(element) {
    element.type = element.type || 'default'
    element.style = { ...ELEMENT_STYLES[element.type] }
    element.content = element.content || {}
    element.children = element.children || []

    applyColumnRowStyle(element)
    iterate(element)

    return element
}

const response = {
    type: 'container',
    children: [
        {
            type: 'column',
            children: [
                {
                    type: 'card',
                    content: {
                        title: 'Staaten',
                        example: 'z. B. Russland, China',
                        description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                        story: '',
                    },
                },
                {
                    type: 'chapter_headline',
                    content: {
                        chapter: '01A',
                        headline: '(Qualitativ) Verstärken',
                    },
                },
                {
                    type: 'card',

                    content: {
                        title: 'Staaten',
                        example: 'z. B. Russland, China',
                        description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                        story: '',
                    },
                },
                {
                    type: 'chapter_headline',
                    content: {
                        chapter: '01B',
                        headline: '(Quantitativ) Vervielfältigen',
                    },
                },
                {
                    type: 'card',

                    content: {
                        title: 'Staaten',
                        example: 'z. B. Russland, China',
                        description:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                        story: '',
                    },
                },
            ],
        },
        {
            type: 'column',

            children: [
                {
                    type: 'row',

                    children: [
                        {
                            type: 'column',

                            children: [
                                {
                                    type: 'card',

                                    content: {
                                        title: 'Staaten',
                                        example: 'z. B. Russland, China',
                                        description:
                                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                                        story: '',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'column',

                            children: [
                                {
                                    type: 'card',

                                    content: {
                                        title: 'Staaten',
                                        example: 'z. B. Russland, China',
                                        description:
                                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                                        story: '',
                                    },
                                },
                                {
                                    type: 'card',

                                    content: {
                                        title: 'Staaten',
                                        example: 'z. B. Russland, China',
                                        description:
                                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                                        story: '',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'row',

                    children: [
                        {
                            type: 'column',

                            children: [
                                {
                                    type: 'card',

                                    content: {
                                        title: 'Staaten',
                                        example: 'z. B. Russland, China',
                                        description:
                                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                                        story: '',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'column',

                            children: [
                                {
                                    type: 'card',

                                    content: {
                                        title: 'Staaten',
                                        example: 'z. B. Russland, China',
                                        description:
                                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                                        story: '',
                                    },
                                },
                                {
                                    type: 'card',

                                    content: {
                                        title: 'Staaten',
                                        example: 'z. B. Russland, China',
                                        description:
                                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
                                        story: '',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

export function getInfographicData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(assignDefaultElement(response))
        }, 1)
    })
}
