<script setup>
import SectionSlide from './SectionSlide.vue'
import SectionArrows from './SectionArrows.vue'
</script>

<script>
export default {
    data() {
        return {
            slide: 1,
            enter_class: "animate__animated animate__slideInRight",
            leave_class: "animate__animated animate__slideOutLeft"
        }
    },
    methods: {
        method_slide(input) {
            if (input > 0) {
                this.enter_class = "animate__animated animate__slideInRight";
                this.leave_class = "animate__animated animate__slideOutLeft"
            }
            else {
                this.enter_class = "animate__animated animate__slideInLeft";
                this.leave_class = "animate__animated animate__slideOutRight"

            }
            let target = this.slide + input
            if (target == 7) {
                this.slide = 1;
            }
            else {
                if (target == 0) {
                    this.slide = 6
                }
                else {
                    this.slide = target
                }
            }
        },
    },
}
</script>

<template>
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"
        rel="stylesheet"
        type="text/css"
    />
    <transition
        name="custom-classes-transition"
        :enter-active-class="enter_class"
        :leave-active-class="leave_class"
        mode="out-in"
    >
        <div v-if="slide == 1" key="1" class="w-screen min-h-screen text-white">
            <div
                class="w-full min-h-screen bg-center bg-no-repeat bg-cover"
                style="background-image: url('src/assets/pictures/unsplash_RmoWqDCqN2E.png')"
            >
                <div class="h-full min-h-screen w-full sm:w-2/3 flex flex-col justify-center px-8">
                    <h1
                        class="text-purple-700 text-3xl sm:text-5xl font-bold pt-4 pb-8"
                    >Ein holistischer Blick auf Desinformation</h1>
                    <p
                        class="sm:text-xl"
                    >Desinformation ist ein komplexes Phänomen. Wir wollen verstehen, wie Desinformation wirkt. Eine ganzheitliche Perspektive soll uns dabei helfen, Desinformation wirksam zu bekämpfen</p>
                </div>
            </div>
        </div>
        <div v-else-if="slide == 2" key="2" class="w-screen min-h-screen flex flex-col sm:flex-row">
            <div class="flex flex-col sm:w-1/2 pt-10 pl-8">
                <h3 class="slide-sub-headline">Ein holistischer Blick auf Desinformation</h3>
                <h2 class="slide-headline">Der systemische Kontext von Desinformation</h2>
                <p
                    class="pr-8 text-justify"
                >Für böswillige Akteur*innen entsteht durch Desinformation Wert. Im Kern blicken wir daher auf die Wertschöpfungskette von Desinformation. Doch Desinformation entsteht nicht im luftleeren Raum. Gesellschaftliche Entwicklungen ermöglichen oder begünstigen sie. Mit Makro- und Meso-Trends beschreiben wir Muster, die unsere Welt über einen längeren Zeitpunkt beeinflussen und einen breiten Geltungsbereich haben. Makro-Trends beschreiben exemplarisch, welche großen Entwicklungslinien unsere Gesellschaft als Ganze prägen und zur Spaltung beitragen. Meso-Trends sind konkrete Ausprägungen davon mit konkretem Bezug zu Desinformation.</p>
            </div>
            <div class="sm:w-1/2 h-full p-10 flex items-center justify-center">
                <img class="w-full h-full" src="src/assets/pictures/intro/overview.svg" />
            </div>
        </div>
        <div v-else-if="slide == 3" class="w-screen min-h-screen flex flex-col sm:flex-row">
            <div class="flex flex-col sm:w-1/2 pt-10 pl-8">
                <h3 class="slide-sub-headline">Ein holistischer Blick auf Desinformation</h3>
                <h2 class="slide-headline">Die Makrotrends</h2>
                <p
                    class="pr-8 text-justify"
                >Große historische Entwicklungslinien prägen unseren Blick auf die Welt, sie tragen aber auch zur gesellschaftlichen Spaltung und Polarisierung bei. Desinformation kann so überhaupt erst auf fruchtbaren Boden fallen. Mit Makro-Trends beschreiben wir exemplarisch das Gesamtsystem, in das Desinformation eingebettet ist.</p>
            </div>
            <div class="sm:w-1/2 h-full p-10 flex items-center justify-center">
                <img
                    class="max-w-full max-h-full"
                    src="src/assets/pictures/intro/overview_macro.svg"
                />
            </div>
        </div>
        <div v-else-if="slide == 4" class="w-screen min-h-screen flex flex-col sm:flex-row">
            <div class="flex flex-col sm:w-1/2 pt-10 pl-8">
                <h3 class="slide-sub-headline">Ein holistischer Blick auf Desinformation</h3>
                <h2 class="slide-headline">Die Mesotrends</h2>
                <p
                    class="pr-8 text-justify"
                >Meso-Trends beschreiben konkrete Ausprägungen der großen historischen Entwicklungslinien (Makro-Trends). Die geringere Abstraktionsebene stellt einen konkreten Zusammenhang zur Ausbreitung von Desinformation dar. Meso-Trends bieten Ansatzpunkte für Maßnahmen gegen das Symptom Desinformation.</p>
            </div>
            <div class="sm:w-1/2 h-full p-10 flex items-center justify-center">
                <img
                    class="max-w-full max-h-full"
                    src="src/assets/pictures/intro/overview_meso.svg"
                />
            </div>
        </div>
        <div v-else-if="slide == 5" class="w-screen min-h-screen flex flex-col">
            <div class="flex flex-col pl-8 pt-10">
                <h3 class="slide-sub-headline">Ein holistischer Blick auf Desinformation</h3>
                <h2 class="slide-headline">Die Wertschöpfungskette</h2>
                <div class="flex flex-col lg:flex-row">
                    <div class="flex flex-col lg:w-1/3">
                        <p
                            class="mb-8 text-justify"
                        >Wie Desinformation entsteht und ihre Wirkung entfaltet, lässt sich wie ein Herstellungsprozess beschreiben[, bei dem Gewinne erzielt werden: an Einfluss, Macht, Status, Geld]. Wir nennen diesen Prozess deshalb „Wertschöpfungskette“ – unterteilt in sieben aufeinanderfolgende Phasen.</p>
                        <div class="hidden lg:block">
                            <img
                                class="max-w-full max-h-full"
                                src="src/assets/pictures/intro/overview_kette.svg"
                            />
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-5 lg:w-2/3 pr-8 lg:pl-8">
                        <div
                            class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                        >
                            <h4 class="text-xl">Phase 1: Initiieren</h4>
                            <p>Also: den Anstoß oder den Auftrag für die Produktion und Verbreitung von Desinformation geben.</p>
                        </div>
                        <div
                            class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                        >
                            <h4 class="text-xl">Phase 2: Produzieren</h4>
                            <p>Also: Desinformation entwickeln und erstellen – in allen denkbaren Varianten.</p>
                        </div>

                        <div
                            class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                        >
                            <h4 class="text-xl">Phase 3: Platzieren</h4>
                            <p>Also: Desinformation gezielt veröffentlichen – so, dass sie besonders viel Wirkung entfaltet bzw. Wert erzeugt.</p>
                        </div>

                        <div
                            class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                        >
                            <h4 class="text-xl">Phase 4: Verbreiten</h4>
                            <p>Also: Desinformation liken, teilen, empfehlen, kommentieren … bewusst oder unbewusst, persönlich oder automatisiert.</p>
                        </div>

                        <div class="flex flex-col justify-between border-2 border-black p-2">
                            <h4 class="text-xl">Phase 5: Beeinflusst werden</h4>
                            <p>Also: Desinformation aufnehmen und verarbeiten – mit allen Konsequenzen für Meinung und Haltung.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="slide == 6" class="w-screen min-h-screen flex flex-col pl-8 pt-10">
            <div>
                <h3 class="slide-sub-headline">Ein holistischer Blick auf Desinformation</h3>
                <h2 class="slide-headline">Akteur*innen und Methoden</h2>
            </div>
            <div class="flex flex-col lg:flex-row flex-grow pb-8">
                <div class="flex flex-col justify-between lg:w-1/3">
                    <p
                        class="mb-8 text-justify pr-8 lg:pr-0"
                    >In jeder Phase der Wertschöpfungskette gibt es Akteur*innen, die an der Desinformations-Herstellung beteiligt sind – und dazu jeweils spezifische Methoden verwenden.</p>
                    <div class="hidden lg:block">
                        <img
                            class="max-w-full max-h-full"
                            src="src/assets/pictures/intro/overview_kette.svg"
                        />
                    </div>
                </div>
                <div class="flex flex-col justify-between w-full lg:w-2/3 pr-8 lg:pl-8">
                    <div class="hidden lg:block">
                        <p class="text-xl">Was?</p>
                        <div class="grid lg:grid-cols-5">
                            <div
                                class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                            >
                                <h4 class="text-xl">Phase 1: Initiieren</h4>
                            </div>
                            <div
                                class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                            >
                                <h4 class="text-xl">Phase 2: Produzieren</h4>
                            </div>

                            <div
                                class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                            >
                                <h4 class="text-xl">Phase 3: Platzieren</h4>
                            </div>

                            <div
                                class="flex flex-col justify-between border-2 border-b-0 lg:border-b-2 lg:border-r-0 border-black p-2"
                            >
                                <h4 class="text-xl">Phase 4: Verbreiten</h4>
                            </div>

                            <div class="flex flex-col justify-between border-2 border-black p-2">
                                <h4 class="text-xl">Phase 5: Beeinflusst werden</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="text-xl">Wer?</p>
                        <div class="w-full border-t-2 border-black">
                            <p>Wer macht’s? Akteur*innen sind je nach Phase z. B. Staaten, Verbände, Medien, Big-Tech-Plattformen, Einzelpersonen …</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-xl">Wie?</p>
                        <div class="w-full border-t-2 border-black">
                            <p>Wie wird’s gemacht? Methoden sind die Mittel und Werkzeuge, die je nach Phase zum Einsatz kommen: darunter z. B. Dekontextualisierung, Micro-Targeting oder Algorithmen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

    <SectionArrows @change_slide="method_slide" :current_slide="slide"></SectionArrows>
</template>

<style scoped>
.slide-sub-headline {
    font-size: 1.5rem /* 24px */;
    line-height: 2rem;
    @media (min-width: 1024px) {
        .lg\:text-3xl {
            font-size: 1.875rem /* 30px */;
            line-height: 2.25rem /* 36px */;
        }
    }
}
.slide-headline {
    font-size: 1.875rem /* 30px */;
    line-height: 2.25rem /* 36px */;
    padding: 1rem 0;
    @media (min-width: 640px) {
        .sm\:pb-20 {
            padding-bottom: 5rem /* 80px */;
        }
    }
}
</style>