<script setup>
import SectionArrows from './SectionArrows.vue'
import Overview from './Overview.vue'
import Overview1 from './Overview.vue'
</script>


<script>
import backgroundImage from '@/assets/pictures/unsplash_RmoWqDCqN2E.png'
export default {
    data() {
        return {
            slide: 1,
            enter_class: 'animate__animated animate__slideInRight',
            leave_class: 'animate__animated animate__slideOutLeft',
        }
    },
    methods: {
        method_slide(input) {
            console.log(input)
            let target = input['target']
            let animationUp = input['animationUp']
            if (animationUp) {
                this.enter_class = 'animate__animated animate__slideInRight'
                this.leave_class = 'animate__animated animate__slideOutLeft'
            } else {
                this.enter_class = 'animate__animated animate__slideInLeft'
                this.leave_class = 'animate__animated animate__slideOutRight'
            }
            this.slide = target;
        },
        swipe() {
            var self = this;
            return function (direction, event) {
                console.log("Swiped in direction ", direction);
                let target = self.slide
                if (direction == "left") {
                    target = self.slide + 1 == 7 ? 1 : self.slide + 1
                    self.method_slide({ 'target': target, 'animationUp': true })
                }
                if (direction == "right") {
                    target = self.slide - 1 == 0 ? 6 : self.slide - 1
                    self.method_slide({ 'target': target, 'animationUp': false })
                }
            };

        }
    },
}
</script>

<template>
    <div v-touch:swipe="swipe()" class="intro-container relative overflow-hidden bg-left-bottom">
        <div
            class="absolute"
            v-bind:class="[slide == 1 ? 'overview-intro-slide' : 'follow-up-slides']"
        >
            <Overview :current_slide="slide"></Overview>
        </div>
        <div class="absolute bottom-20 left-40 flex flex-col gap-12 w-5/12">
            <div v-if="slide == 1">
                <div class="flex flex-col gap-5">
                    <h1 class="text-7xl">
                        Ein holistischer Blick
                        <br />auf Desinformation
                    </h1>
                    <p
                        class="text-sans text-2xl w-2/3"
                    >Desinformation ist ein komplexes Phänomen. Wir wollen verstehen, wie Desinformation wirkt. Eine ganzheitliche Perspektive soll uns dabei helfen, Desinformation wirksam zu bekämpfen.</p>
                </div>
            </div>
            <div v-if="slide == 2">
                <div class="flex flex-col gap-5">
                    <h1 class="text-7xl">Das Universum</h1>
                    <p
                        class="text-sans text-2xl"
                    >Für böswillige Akteur*innen entsteht durch Desinformation Wert. Im Kern blicken wir daher auf die Wertschöpfungskette (WSK) von Desinformation. Doch Desinformation entsteht nicht im luftleeren Raum. Gesellschaftliche Entwicklungen ermöglichen oder begünstigen sie. Mit Makro- und Meso-Trends beschreiben wir Muster, die unsere Welt über einen längeren Zeitpunkt beeinflussen und einen breiten Geltungsbereich haben. Makro-Trends beschreiben exemplarisch, welche großen Entwicklungslinien unsere Gesellschaft als Ganze prägen und zur Spaltung beitragen. Meso-Trends sind konkrete Ausprägungen davon mit konkretem Bezug zu Desinformation.</p>
                </div>
            </div>
            <div v-if="slide == 3">
                <div class="flex flex-col gap-5">
                    <h1 class="text-7xl">Makro-Trends</h1>
                    <p
                        class="text-sans text-2xl"
                    >Große historische Entwicklungslinien prägen unseren Blick auf die Welt, sie tragen aber auch zur gesellschaftlichen Spaltung und Polarisierung bei. Desinformation kann so überhaupt erst auf fruchtbaren Boden fallen. Mit Makro-Trends beschreiben wir exemplarisch das Gesamtsystem, in das Desinformation eingebettet ist.</p>
                </div>
            </div>
            <div v-if="slide == 4">
                <div class="flex flex-col gap-5">
                    <h1 class="text-7xl">Meso-Trends</h1>
                    <p
                        class="text-sans text-2xl"
                    >Meso-Trends beschreiben konkrete Ausprägungen der großen historischen Entwicklungslinien (Makro-Trends). Die geringere Abstraktionsebene stellt einen konkreten Zusammenhang zur Ausbreitung von Desinformation her. Meso-Trends bieten Ansatzpunkte für Maßnahmen gegen das Symptom Desinformation.</p>
                </div>
            </div>
            <div v-if="slide == 5">
                <div class="flex flex-col gap-5">
                    <h1 class="text-7xl">Die Wertschöpfungskette von Desinformation</h1>
                    <p
                        class="text-sans text-2xl"
                    >Wie Desinformation entsteht und ihre Wirkung entfaltet, lässt sich wie ein Herstellungsprozess beschreiben, bei dem Gewinne erzielt werden: an Einfluss, Macht, Status, Geld. Wir nennen diesen Prozess deshalb „Wertschöpfungskette“ – unterteilt in fünfsieben aufeinanderfolgende Phasen.</p>
                </div>
            </div>
            <div v-if="slide == 6">
                <div class="flex flex-col gap-5">
                    <h1 class="text-7xl">Akteur*innen und Methoden</h1>
                    <p
                        class="text-sans text-2xl"
                    >In jeder Phase der Wertschöpfungskette gibt es Akteur*innen, die an der Desinformations-Herstellung beteiligt sind – und dazu jeweils spezifische Methoden verwenden.</p>
                </div>
            </div>

            <SectionArrows @change_slide="method_slide" :current_slide="slide"></SectionArrows>
        </div>
    </div>
</template>

<style scoped>
.intro-container {
    height: 90vh;
    /* background-image: ; */
    background-image: url("@/assets/bubbles_desktop.svg"),
        linear-gradient(rgba(255, 255, 255, 1), rgba(255, 246, 204, 1));
}

.overview-intro-slide {
    bottom: -41vw;
    right: -20vw;
    width: 80vw;
    height: 80vw;
}
.follow-up-slides {
    bottom: -25vw;
    right: -20vw;
    width: 50vw;
    height: 50vw;
}
.slide-sub-headline {
    font-size: 1rem;
    line-height: 1.5rem;
}
.slide-headline {
    font-size: 1.875rem;
    line-height: 2.5rem;
    /* padding: 1rem 0; */
    font-weight: bold;
}

.slide-text {
    font-size: 1rem /* 30px */;
    line-height: 1.35rem /* 36px */;
    text-align: justify;
}

@media (min-width: 769px) {
    .slide-sub-headline {
        font-size: 1.5rem;
        line-height: 2rem;
    }
    .slide-headline {
        font-size: 2.5rem;
        line-height: 2.75rem;
        /* padding: 1rem 0; */
    }

    .slide-text {
        font-size: 1.5rem /* 30px */;
        line-height: 1.75rem /* 36px */;
    }
}

@media (min-width: 1400px) {
    .slide-sub-headline {
        font-size: 2.5rem;
        line-height: 3rem;
    }
    .slide-headline {
        font-size: 3rem;
        line-height: 4.5rem;
    }

    .slide-text {
        font-size: 1.5rem;
        line-height: 2rem;
    }
}
</style>
