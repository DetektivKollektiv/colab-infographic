<template>
    <div class="text-center">
        <!--  <div
            class="h-[50vh] w-full bg-yellow-500 flex justify-center items-center"
        >
            <TextBlock>
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
        </div> -->
        <div class="overflow-hidden bg-yellow-500">
            <div class="w-screen relative">
                <div
                    class="rounded-full w-[500vw] h-[500vw] absolute -translate-x-1/2 left-1/2 bg-yellow-300"
                ></div>
                <p
                    class="font-serif absolute -translate-x-1/2 top-[25%] md:top-[15%] left-1/2"
                >
                    Wie Wirkung von Trends
                </p>

                <div
                    class="w-0 h-[500vw] relative left-1/2 -translate-x-1/2"
                    :style="{ transform: `rotate(${3}deg) translateX(-50%)` }"
                >
                    <div
                        class="h-[500vw] w-0 absolute left-1/2"
                        v-for="mesotrend in getTrends(mesotrends)"
                        :key="mesotrend"
                        :style="mesotrend.style"
                    >
                        <TextBlock
                            class="w-screen -translate-x-1/2 mt-[25vh] -translate-y-1/2"
                        >
                            <template v-slot:title>
                                <h1>{{ mesotrend.headline }}</h1>
                            </template>
                            <template v-slot:description>
                                <p>
                                    {{ mesotrend.text }}
                                </p>
                            </template>
                        </TextBlock>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  <div class="overflow-hidden flex flex-col items-center bg-yellow-300">
        <div class="h-[50vh] overflow-y-hidden">
            <div class="circle flex-none bg-white flex justify-center">
                <div class="flex flex-col items-center mt-12 w-48 text-center">
                    <h1 class="text-2xl font-bold">Hello</h1>
                    <p>
                        Gegenstände in der Realität bewegen sich selten
                        ruckartig oder mit konstanter Geschwindigkeit.
                    </p>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script setup>
import mesotrends from '@/api/mesotrends.json'

const currentRotation = ref(0)

function getTrends(trends) {
    return trends.map((trend, i) => ({
        style: {
            transform: `rotate(${12 * i}deg) translateX(-50%)`,
        },
        headline: trend.headline,
        text: trend.text,
    }))
}

function setRotation() {
    currentRotation.value = currentRotation.value * -1
}
</script>
<style scoped></style>
