<script setup></script>

<script>
export default {
    data: () => ({ index: 0, elementsLefts: [], length: 0 }),
    mounted() {
        this.elementsLefts = this.getElementsLefts()
        this.length = this.$refs.container.children.length
    },
    methods: {
        getElementsLefts() {
            return Array.prototype.slice
                .call(this.$refs.container.children)
                .map((el) => el.getBoundingClientRect().x)
        },
        scrollTo(index) {
            if (index >= this.length) {
                index = 0
            } else if (index < 0) {
                index = this.length - 1
            }
            this.$refs.container.scrollTo({
                left:
                    this.$refs.container.scrollLeft + this.elementsLefts[index],
                behavior: 'smooth',
            })
        },
        getCurrentElement() {
            this.elementsLefts = this.getElementsLefts()
            return this.elementsLefts.indexOf(
                this.elementsLefts.reduce((prev, curr) =>
                    Math.abs(curr - 0) < Math.abs(prev - 0) ? curr : prev
                )
            )
        },
        update() {
            if (this.getCurrentElement() !== this.index) {
                this.index = this.getCurrentElement()
                console.log('current Element:', this.index)
            }
        },
    },
}
</script>

<template>
    <div
        class="intro-container relative flex flex-col justify-end overflow-hidden bg-left-bottom"
    >
        <div class="container-box h-full flex flex-col justify-between z-10">
            <div
                class="flex flex-col justify-start lg:justify-end pt-10 pb-25 lg:py-20 gap-4 w-full h-[70%] lg:h-full"
            >
                <div
                    class="flex flex-row snap-x snap-mandatory overflow-x-scroll w-full h-full scrollbar-hidden"
                    ref="container"
                    @scroll="update"
                >
                    <div
                        class="flex flex-col justify-start lg:justify-end gap-5 min-w-full snap-center"
                    >
                        <div class="w-full lg:w-7/12">
                            <h1 class="headline">
                                Ein holistischer Blick
                                <br />auf Desinformation
                            </h1>
                            <p class="w-full lg:w-2/3">
                                Desinformation ist ein komplexes Phänomen. Wir
                                wollen verstehen, wie Desinformation wirkt. Eine
                                ganzheitliche Perspektive soll uns dabei helfen,
                                Desinformation wirksam zu bekämpfen.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-start lg:justify-end gap-5 min-w-full snap-center"
                    >
                        <div class="w-full lg:w-7/12">
                            <h1 class="headline">Das Universum</h1>
                            <p class="w-full lg:w-2/3">
                                Für böswillige Akteur*innen entsteht durch
                                Desinformation Wert. Im Kern blicken wir daher
                                auf die
                                <span class="highlight bg-white"
                                    >Wertschöpfungskette</span
                                >
                                von Desinformation. Doch Desinformation entsteht
                                nicht im luftleeren Raum. Gesellschaftliche
                                Entwicklungen ermöglichen oder begünstigen sie.
                                Mit
                                <span class="highlight bg-yellow-400"
                                    >Makro-Trends</span
                                >
                                und
                                <span class="highlight bg-yellow-300"
                                    >Meso-Trends</span
                                >
                                beschreiben wir Muster, die unsere Welt über
                                einen längeren Zeitpunkt beeinflussen und einen
                                breiten Geltungsbereich haben. Makro-Trends
                                beschreiben exemplarisch, welche großen
                                Entwicklungslinien unsere Gesellschaft als Ganze
                                prägen und zur Spaltung beitragen. Meso-Trends
                                sind konkrete Ausprägungen davon mit konkretem
                                Bezug zu Desinformation.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-start lg:justify-end gap-5 min-w-full snap-center"
                    >
                        <div class="w-full lg:w-7/12">
                            <h1 class="headline">Makro-Trends</h1>
                            <p class="w-full lg:w-2/3">
                                Große historische Entwicklungslinien prägen
                                unseren Blick auf die Welt, sie tragen aber auch
                                zur gesellschaftlichen Spaltung und
                                Polarisierung bei. Desinformation kann so
                                überhaupt erst auf fruchtbaren Boden fallen. Mit
                                <span class="highlight bg-yellow-400"
                                    >Makro-Trends</span
                                >
                                beschreiben wir exemplarisch das Gesamtsystem,
                                in das Desinformation eingebettet ist.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-start lg:justify-end gap-5 min-w-full snap-center"
                    >
                        <div class="w-full lg:w-7/12">
                            <h1 class="headline">Meso-Trends</h1>
                            <p class="w-full lg:w-2/3">
                                Meso-Trends beschreiben konkrete Ausprägungen
                                der großen historischen Entwicklungslinien
                                (Makro-Trends). Die geringere Abstraktionsebene
                                stellt einen konkreten Zusammenhang zur
                                Ausbreitung von Desinformation her.
                                <span class="highlight bg-yellow-300"
                                    >Meso-Trends</span
                                >
                                bieten Ansatzpunkte für Maßnahmen gegen das
                                Symptom Desinformation.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col-reverse lg:flex-col justify-end lg:justify-between lg:gap-5 min-w-full snap-center"
                    >
                        <WSKIntro
                            :showDescription="true"
                            :showText="true"
                        ></WSKIntro>
                        <div class="lg:w-7/12">
                            <h1 class="headline">
                                Die Wertschöpfungskette von Desinformation
                            </h1>
                            <p class="w-full lg:w-2/3">
                                Wie Desinformation entsteht und ihre Wirkung
                                entfaltet, lässt sich wie ein
                                Herstellungsprozess beschreiben, bei dem Gewinne
                                erzielt werden: an Einfluss, Macht, Status,
                                Geld. Wir nennen diesen Prozess deshalb
                                <span class="highlight bg-white"
                                    >"Wertschöpfungskette"</span
                                >
                                – unterteilt in fünf aufeinanderfolgende Phasen.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col-reverse lg:flex-col justify-end lg:justify-between lg:gap-5 min-w-full snap-center"
                    >
                        <div class="flex flex-col gap-4 lg:gap-8 lg:w-1/3">
                            <div class="w-full">
                                <WSKIntro
                                    :showDescription="false"
                                    :showText="false"
                                ></WSKIntro>
                            </div>
                            <div class="relative pt-2">
                                <h3
                                    class="absolute -translate-y-6 lg:-translate-y-8"
                                >
                                    Wer
                                </h3>
                                <div class="h-0.5 bg-red-500"></div>
                                <p class="w-full flex-shrink-0 mt-2 mr-4">
                                    Wer macht’s? Akteur*innen sind je nach Phase
                                    z. B. Staaten, Verbände, Medien,
                                    Big-Tech-Plattformen, Einzelpersonen …
                                </p>
                            </div>
                            <div class="relative pt-2">
                                <h3
                                    class="absolute -translate-y-6 lg:-translate-y-8"
                                >
                                    Wie
                                </h3>
                                <div class="w-full h-0.5 bg-red-500"></div>
                                <p class="w-full flex-shrink-0 mt-2 mr-4">
                                    Wie wird’s gemacht? Methoden sind die Mittel
                                    und Werkzeuge, die je nach Phase zum Einsatz
                                    kommen: darunter z. B. Dekontextualisierung,
                                    Micro-Targeting oder Algorithmen.
                                </p>
                            </div>
                        </div>

                        <div class="w-full lg:w-7/12">
                            <h1 class="headline">Akteur*innen und Methoden</h1>
                            <p class="w-full lg:w-2/3">
                                In jeder Phase der Wertschöpfungskette gibt es
                                <span class="highlight bg-white"
                                    >Akteur*innen</span
                                >, die an der Desinformations-Herstellung
                                beteiligt sind – und dazu jeweils spezifische
                                <span class="highlight bg-white">Methoden</span>
                                verwenden.
                            </p>
                        </div>
                    </div>
                </div>
                <Pagination
                    class="self-center lg:self-baseline pb-4 lg:pb-0"
                    :length="length"
                    :index="index"
                    :showArrows="true"
                    @index="scrollTo"
                ></Pagination>
            </div>
        </div>
        <div
            class="absolute z-0 lg:transition-all lg:duration-700"
            v-bind:class="[
                index == 0 ? 'overview-intro-slide' : 'follow-up-slides',
            ]"
        >
            <Overview :current_slide="index + 1"></Overview>
        </div>
        <PageCount
            :length="length"
            :index="index + 1"
            class="lg:hidden absolute top-0 right-0 mt-4 mr-4"
        ></PageCount>
    </div>
</template>

<style scoped>
.intro-container {
    min-height: 90vh;
    background-image: url('@/assets/bubbles_desktop.svg'),
        linear-gradient(rgba(255, 255, 255, 1), rgba(255, 246, 204, 1));
}

.overview-intro-slide {
    @apply -bottom-[41vw] -right-[20vw] w-[80vw] h-[80vw];
}
.follow-up-slides {
    @apply -bottom-[25vw] -right-[15vw] w-[50vw] h-[50vw];
}

.headline {
    @apply text-2xl md:text-3xl xl:text-7xl;
}
.highlight {
    @apply font-bold font-headline border-2 px-2 border-black;
}

@media only screen and (max-width: 550px) {
    .overview-intro-slide,
    .follow-up-slides {
        @apply -bottom-[250vw] -right-[100vw] w-[300vw] h-[300vw];
    }
    .intro-container {
        height: 95vh;
        min-height: 667px;
        background-image: url('@/assets/bubbles_mobile.svg'),
            linear-gradient(rgba(255, 255, 255, 1), rgba(255, 246, 204, 1));
    }
}

@media only screen and (max-width: 1023px) and (min-width: 551px) {
    .overview-intro-slide,
    .follow-up-slides {
        @apply -bottom-[170vw] -right-[50vw] w-[200vw] h-[200vw];
    }
}
</style>
