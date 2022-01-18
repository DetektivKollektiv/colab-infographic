<template>
    <div class="container-box">
        <div class="pt-6 relative">
            <div class="flex space-x-4 justify-center float-left">
                <ButtonStory story="Story 1"></ButtonStory>
                <ButtonStory story="Story 2"></ButtonStory>
                <ButtonStory story="Story 3"></ButtonStory>
            </div>

            <ButtonDropdown class="absolute right-0"></ButtonDropdown>
        </div>
        <SectionHeadline>WAS</SectionHeadline>
        <Grid :doubleFourth="true" class="mt-4">
            <component
                v-for="chapter of WAS.chapters"
                :is="getComponent(chapter)"
                :content="chapter"
                :key="chapter"
            />
        </Grid>
        <SectionHeadline>WER</SectionHeadline>
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
                ></component
            ></Column>
            <Column>
                <component
                    v-for="element of WER['03']"
                    :key="element"
                    :is="getComponent(element)"
                    :content="element"
                ></component
            ></Column>
            <Column>
                <component
                    v-for="element of WER['04']"
                    :key="element"
                    :is="getComponent(element)"
                    :content="element"
                ></component
            ></Column>
            <Column>
                <component
                    v-for="element of WER['04A']"
                    :key="element"
                    :is="getComponent(element)"
                    :content="element"
                ></component>
                <component
                    v-for="element of WER['04B']"
                    :key="element"
                    :is="getComponent(element)"
                    :content="element"
                ></component
            ></Column>
            <Column>
                <component
                    v-for="element of WER['05']"
                    :key="element"
                    :is="getComponent(element)"
                    :content="element"
                ></component
            ></Column>
        </Grid>
        <SectionHeadline>WIE</SectionHeadline>
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
                ></component
            ></Column>
            <Column>
                <component
                    v-for="element of WIE['03']"
                    :key="element"
                    :is="getComponent(element)"
                    :content="element"
                ></component
            ></Column>
            <Column style="padding: 0%; background-color: transparent">
                <Column>
                    <div class="flex w-full gap-2">
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
                        </Column></div
                ></Column>
                <Column>
                    <div class="flex w-full gap-2">
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
                        </Column></div
                ></Column>
            </Column>

            <Column>
                <component
                    v-for="element of WIE['05']"
                    :key="element"
                    :is="getComponent(element)"
                    :content="element"
                ></component
            ></Column>
        </Grid>
    </div>
</template>

<script setup>
import { WER, WIE, WAS } from '@/api/infographic'

import headline from '@/components/infographic/Headline.vue'
import card from '@/components/infographic/Card.vue'
import chapter from '@/components/infographic/Chapter.vue'

const COMPONENTS = {
    headline,
    card,
    chapter,
}

function getComponent(element) {
    return COMPONENTS[element.type]
}
</script>
