import massnahmenTemplate from './massnahmen_template.json'
import initiativenTemplate from './initiativen_template.json'

const findInitiative = (key) =>
    initiativenTemplate.find((item) => item.headline === key)

export const options = Object.entries(massnahmenTemplate).map(
    ([key, value]) => ({
        text: key,
        icon: value.icon,
        color: value.color,
    })
)

export const massnahmen = Object.entries(massnahmenTemplate).reduce(
    (acc, [key, value]) => {
        const content = value.content.map((item) => {
            if (item.players) {
                item.description = item.description.concat(
                    item.players.map((player) => findInitiative(player))
                )
            }

            return item
        })

        value.content = content

        acc[key] = value
        return acc
    },
    {}
)
