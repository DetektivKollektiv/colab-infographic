<template>
    <div class="text-center">
        <div
            class="h-[30rem] md:h-[40rem] w-full bg-yellow-500 flex justify-center items-center"
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
        </div>
        <Rotation
            bg="bg-yellow-500"
            color="bg-yellow-400"
            :trends="makrotrends"
            subtitle="Makrotrends"
        ></Rotation>
        <Rotation
            bg="bg-yellow-400"
            color="bg-yellow-300"
            :trends="mesotrends"
            subtitle="Mesotrends"
        ></Rotation>

        <div class="relative h-[5vw] bg-yellow-300 overflow-hidden">
            <div
                class="rounded-full w-[500vw] h-[500vw] absolute -translate-x-1/2 left-1/2 bg-white"
            ></div>
        </div>
    </div>
</template>
<script setup>
import mesotrends from '@/api/mesotrends.json'
import makrotrends from '@/api/makrotrends.json'
</script>
<style scoped></style>
