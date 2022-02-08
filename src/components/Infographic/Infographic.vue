<template>
    <div class="relative">
        <div class="container-box">
                        <TextBlock class="items-center justify-center text-center mx-auto pb-8">
                <template v-slot:subtitle>
                    <p class="font-serif">Wie Wirkung von Trends</p>
                </template>
                <template v-slot:title>
                    <h1>Die Wertschöpfungskette</h1>
                </template>
                <template v-slot:description>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Exercitationem corporis at ipsum laborum impedit
                        ut nesciunt aspernatur consequatur tempore, corrupti
                        veniam autem eligendi dignissimos eveniet molestias vel
                        cumque deserunt accusantium?
                    </p>
                </template>
            </TextBlock>

            <Navbar class="pt-6"></Navbar>
            <WSKInfographic class="mt-24"></WSKInfographic>
            <Grid
                class="mt-12 overflow-hidden transition-all duration-300"
                :class="[infographicStore.story ? 'max-h-96' : 'max-h-0']"
                :doubleFourth="true"
            >
                <p
                    v-for="story in infographicStore.storyContent"
                    :key="story"
                    class="h-fit w-full rounded-md text-center"
                >
                    {{ story }}
                </p>
            </Grid>
            <SectionHeadline>
                <template v-slot:headline>Wer</template>
                <template v-slot:description>
                    Wer macht’s? Akteur*innen sind je nach Phase z. B. Staaten,
                    Verbände, Medien, Big-Tech-Plattformen, Einzelpersonen.
                </template>
            </SectionHeadline>
            <Grid :doubleFourth="false">
                <Column>
                    <component
                        v-for="element of WER['01']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column>
                    <component
                        v-for="element of WER['02']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column>
                    <component
                        v-for="element of WER['03']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column style='width: calc(100% + 0.5rem) !important'>
                    <component
                        v-for="element of WER['04']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column>
                    <component
                        v-for="element of WER['04A']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                        class='w-[calc(100% + 0.5rem)]'
                    ></component>
                    <component
                        v-for="element of WER['04B']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column>
                    <component
                        v-for="element of WER['05']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
            </Grid>
            <SectionHeadline>
                <template v-slot:headline>WIE</template>
                <template v-slot:description>
                    Wie wird’s gemacht? Methoden sind die Mittel und Werkzeuge,
                    die je nach Phase zum Einsatz kommen: darunter z. B.
                    Dekontextualisierung, Micro-Targeting oder Algorithmen.
                </template>
            </SectionHeadline>
            <Grid :doubleFourth="true">
                <Column>
                    <component
                        v-for="element of WIE['01']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column>
                    <component
                        v-for="element of WIE['02']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column>
                    <component
                        v-for="element of WIE['03']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
                <Column style="padding: 0%; background-color: transparent">
                    <Column>
                        <div class="flex w-full space-x-2">
                            <Column style="padding: 0%">
                                <component
                                    v-for="element of WIE['04.1']"
                                    :key="element"
                                    :is="getComponent(element)"
                                    :content="element"
                                ></component>
                            </Column>
                            <Column style="padding: 0%">
                                <component
                                    v-for="element of WIE['04A']"
                                    :key="element"
                                    :is="getComponent(element)"
                                    :content="element"
                                ></component>
                            </Column>
                        </div>
                    </Column>
                    <Column>
                        <div class="flex w-full space-x-2">
                            <Column style="padding: 0%">
                                <component
                                    v-for="element of WIE['04.2']"
                                    :key="element"
                                    :is="getComponent(element)"
                                    :content="element"
                                ></component>
                            </Column>
                            <Column style="padding: 0%">
                                <component
                                    v-for="element of WIE['04B']"
                                    :key="element"
                                    :is="getComponent(element)"
                                    :content="element"
                                ></component>
                            </Column>
                        </div>
                    </Column>
                </Column>
                <Column>
                    <component
                        v-for="element of WIE['05']"
                        :key="element"
                        :is="getComponent(element)"
                        :content="element"
                    ></component>
                </Column>
            </Grid>
        </div>
    </div>
</template>

<script setup>
import { WER, WIE, WAS } from '@/api/infographic'
import { useInfographicStore } from '@/stores/infographic'

const infographicStore = useInfographicStore()

import headline from '@/components/infographic/Headline.vue'
import card from '@/components/infographic/Card.vue'

const COMPONENTS = {
    headline,
    card,
}

function getComponent(element) {
    return COMPONENTS[element.type]
}
</script>
