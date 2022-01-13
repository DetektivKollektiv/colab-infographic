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
            <div class="w-screen relative h-[80vh]">
                <div
                    class="rounded-full w-[500vw] h-[500vw] absolute -translate-x-1/2 left-1/2 bg-yellow-300"
                ></div>

                <div
                    class="w-0 h-[500vw] relative left-1/2 -translate-x-1/2 transition-transform"
                    :style="getStyle(currentRotation)"
                >
                    <div
                        class="h-[500vw] w-0 absolute left-1/2 cursor-pointer"
                        v-for="mesotrend in getTrends(mesotrends)"
                        :key="mesotrend"
                        :style="getStyle(mesotrend.rotation)"
                        :class="{
                            'opacity-50':
                                currentRotation * -1 !== mesotrend.rotation,
                        }"
                        @click="setRotation(mesotrend.rotation)"
                    >
                        <TextBlock
                            class="w-screen -translate-x-1/2 mt-[40vh] -translate-y-1/2"
                        >
                            <template v-slot:subtitle>
                                <p class="font-serif">Mesotrends</p>
                            </template>
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

function getTrends(trends) {
    return trends.map((trend, i) => ({
        rotation: 12 * i,
        headline: trend.headline,
        text: trend.text,
    }))
}

function getStyle(rotation) {
    return {
        transform: `rotate(${rotation}deg) translateX(-50%)`,
    }
}
const currentRotation = ref(0)

function setRotation(rotation) {
    currentRotation.value = rotation * -1
    console.log(
        'setRotation',
        rotation,
        getStyle(currentRotation.value),
        currentRotation.value
    )
}
</script>
<style scoped></style>
