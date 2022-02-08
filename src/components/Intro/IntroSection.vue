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
                    this.elementsLefts[index] + this.$refs.container.scrollLeft,
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
            }
        },
    },
}
</script>

<template>
    <div
        class="intro-container relative flex flex-col justify-end overflow-hidden bg-left-bottom"
    >
        <div class="z-10 flex h-full w-full flex-col justify-between">
            <div
                class="pb-25 flex h-[70%] w-full flex-col justify-start space-y-4 pt-10 lg:h-full lg:justify-end lg:py-20"
            >
                <div
                    class="scrollbar-hidden flex h-full w-full snap-x snap-mandatory flex-row overflow-x-scroll"
                    ref="container"
                    @scroll="update"
                >
                    <div class="flex min-w-full items-end">
                        <div
                            class="container-box fixed-container flex snap-center flex-col justify-start gap-5 lg:justify-end"
                        >
                            <div class="w-full lg:w-7/12">
                                <h1 class="headline">
                                    Ein holistischer Blick
                                    <br />auf Desinformation
                                </h1>
                                <p class="w-full lg:w-2/3">
                                    Desinformation ist ein weit verbreitetes,
                                    komplexes und gefährliches Phänomen unserer
                                    Zeit. Wir wollen uns davon ein umfassendes
                                    und differenziertes Bild machen – um so
                                    herauszukriegen, wie sich wirkungsvoll gegen
                                    Desinformation vorgehen lässt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex min-w-full items-end">
                        <div
                            class="container-box fixed-container flex snap-center flex-col justify-start gap-5 lg:justify-end"
                        >
                            <div class="w-full lg:w-7/12">
                                <h1 class="headline">Das Universum</h1>
                                <p class="w-full lg:w-2/3">
                                    Für böswillige Akteur*innen entsteht durch
                                    Desinformation Wert. Im Kern blicken wir
                                    daher auf die
                                    <span class="highlight bg-white"
                                        >Wertschöpfungskette</span
                                    >
                                    von Desinformation. Doch Desinformation
                                    entsteht nicht im luftleeren Raum.
                                    Gesellschaftliche Entwicklungen ermöglichen
                                    oder begünstigen sie. Mit
                                    <span class="highlight bg-yellow-400"
                                        >Makro‑Trends</span
                                    >
                                    und
                                    <span class="highlight bg-yellow-300"
                                        >Meso‑Trends</span
                                    >
                                    beschreiben wir Muster, die unsere Welt über
                                    einen längeren Zeitpunkt beeinflussen und
                                    einen breiten Geltungsbereich haben.
                                    Makro‑Trends beschreiben exemplarisch,
                                    welche großen Entwicklungslinien unsere
                                    Gesellschaft als Ganze prägen und zur
                                    Spaltung beitragen. Meso‑Trends sind
                                    konkrete Ausprägungen davon mit konkretem
                                    Bezug zu Desinformation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex min-w-full items-end">
                        <div
                            class="container-fixed container-box flex snap-center flex-col justify-start gap-5 lg:justify-end"
                        >
                            <div class="w-full lg:w-7/12">
                                <h1 class="headline">Makro‑Trends</h1>
                                <p class="w-full lg:w-2/3">
                                    Große historische Entwicklungslinien prägen
                                    unseren Blick auf die Welt, sie tragen aber
                                    auch zur gesellschaftlichen Spaltung und
                                    Polarisierung bei. Desinformation kann so
                                    überhaupt erst auf fruchtbaren Boden fallen.
                                    Mit
                                    <span class="highlight bg-yellow-400"
                                        >Makro‑Trends</span
                                    >
                                    beschreiben wir exemplarisch das
                                    Gesamtsystem, in das Desinformation
                                    eingebettet ist.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex min-w-full items-end">
                        <div
                            class="container-fixed container-box flex snap-center flex-col justify-start gap-5 lg:justify-end"
                        >
                            <div class="w-full lg:w-7/12">
                                <h1 class="headline">Meso‑Trends</h1>
                                <p class="w-full lg:w-2/3">
                                    <span
                                        class="highlight break-normal bg-yellow-300"
                                        >Meso‑Trends</span
                                    >
                                    beschreiben konkrete Ausprägungen der großen
                                    historischen Entwicklungslinien
                                    (Makro‑Trends). Die geringere
                                    Abstraktionsebene stellt einen konkreten
                                    Zusammenhang zur Ausbreitung von
                                    Desinformation her.
                                    <span
                                        class="highlight break-normal bg-yellow-300"
                                        >Meso‑Trends</span
                                    >
                                    bieten Ansatzpunkte für Maßnahmen gegen das
                                    Symptom Desinformation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex min-w-full items-end">
                        <div
                            class="container-fixed container-box flex snap-center flex-col-reverse justify-end lg:flex-col lg:justify-between lg:gap-5"
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
                                    Herstellungsprozess beschreiben, bei dem
                                    Gewinne erzielt werden: an Einfluss, Macht,
                                    Status, Geld. Wir nennen diesen Prozess
                                    deshalb
                                    <span class="highlight bg-white"
                                        >Wertschöpfungskette</span
                                    >
                                    – unterteilt in fünf aufeinanderfolgende
                                    Phasen.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="min-w-full">
                        <div
                            class="container-fixed container-box flex snap-center flex-col-reverse justify-end lg:flex-col lg:justify-between lg:gap-5"
                        >
                            <div class="flex flex-col gap-4 lg:w-1/3 lg:gap-8">
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
                                    <p class="mt-2 mr-4 w-full flex-shrink-0">
                                        Wer macht’s? Akteur*innen sind je nach
                                        Phase z. B. Staaten, Verbände, Medien,
                                        Big-Tech-Plattformen, Einzelpersonen …
                                    </p>
                                </div>
                                <div class="relative pt-2">
                                    <h3
                                        class="absolute -translate-y-6 lg:-translate-y-8"
                                    >
                                        Wie
                                    </h3>
                                    <div class="h-0.5 w-full bg-red-500"></div>
                                    <p class="mt-2 mr-4 w-full flex-shrink-0">
                                        Wie wird’s gemacht? Methoden sind die
                                        Mittel und Werkzeuge, die je nach Phase
                                        zum Einsatz kommen: darunter z. B.
                                        Dekontextualisierung, Micro-Targeting
                                        oder Algorithmen.
                                    </p>
                                </div>
                            </div>

                            <div class="w-full lg:w-7/12">
                                <h1 class="headline">
                                    Akteur*innen und Methoden
                                </h1>
                                <p class="w-full lg:w-2/3">
                                    In jeder Phase der Wertschöpfungskette gibt
                                    es
                                    <span class="highlight bg-white"
                                        >Akteur*innen</span
                                    >, die an der Desinformations-Herstellung
                                    beteiligt sind – und dazu jeweils
                                    spezifische
                                    <span class="highlight bg-white"
                                        >Methoden</span
                                    >
                                    verwenden.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-box flex flex-col">
                    <Pagination
                        class="self-center pb-4 lg:self-baseline lg:pb-0"
                        :length="length"
                        :index="index"
                        :showArrows="true"
                        @index="scrollTo"
                    ></Pagination>
                </div>
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
            class="absolute top-0 right-0 mt-4 mr-4 lg:hidden"
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
    @apply -bottom-[41vw] -right-[20vw] h-[80vw] w-[80vw];
}
.follow-up-slides {
    @apply -bottom-[25vw] -right-[15vw] h-[50vw] w-[50vw];
}

.headline {
    @apply text-2xl md:text-3xl xl:text-7xl;
}
.highlight {
    @apply border-2 border-black px-2 font-headline font-bold;
}

@media only screen and (max-width: 550px) {
    .overview-intro-slide,
    .follow-up-slides {
        @apply -bottom-[250vw] -right-[100vw] h-[300vw] w-[300vw];
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
        @apply -bottom-[170vw] -right-[50vw] h-[200vw] w-[200vw];
    }
}
</style>
