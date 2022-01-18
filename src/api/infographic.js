import was from './was.json'
import wer from './wer.json'
import wie from './wie.json'

const DEFAULT_TYPES = {
    headline: {
        type: 'headline',
        subheadline: '',
        headline: '',
    },
    card: {
        type: 'card',
        title: '',
        description: '',
        example: '',
        exampleDescription: '',
        storys: [],
    },
    phase: {
        type: 'phase',
        id: '',
        text: '',
    },
    notFound: {},
}

function cleanData(data) {
    return Object.entries(data).reduce((acc, [key, value]) => {
        acc[key] = value
            .map((element) => {
                return assignDefault(element)
            })
            .filter((element) => element)
        return acc
    }, {})
}

function getType(element) {
    return isHeadline(element)
        ? 'headline'
        : isCard(element)
        ? 'card'
        : isPhase(element)
        ? 'phase'
        : undefined
}

function isHeadline(element) {
    return (
        Object.keys(element).includes('headline') &&
        Object.keys(element).includes('subheadline')
    )
}

function isCard(element) {
    return (
        Object.keys(element).includes('title') &&
        Object.keys(element).includes('description')
    )
}

function isPhase(element) {
    return (
        Object.keys(element).includes('id') &&
        Object.keys(element).includes('text')
    )
}

function assignDefault(element) {
    return getType(element)
        ? Object.assign(
              element,
              Object.assign(DEFAULT_TYPES[getType(element)], element)
          )
        : undefined
}

export const WAS = cleanData(was)
export const WER = cleanData(wer)
export const WIE = cleanData(wie)
