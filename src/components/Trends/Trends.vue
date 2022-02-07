<template>
    <div class="relative z-20 text-center">
        <div
            class="flex h-[30rem] w-full items-center justify-center bg-yellow-500 md:h-[40rem]"
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

        <div class="relative h-[5vw] overflow-hidden bg-yellow-300">
            <div
                class="absolute left-1/2 h-[500vw] w-[500vw] -translate-x-1/2 rounded-full bg-white"
            ></div>
        </div>
    </div>
</template>
<script setup>
import mesotrends from '@/api/mesotrends.json'
import makrotrends from '@/api/makrotrends.json'
</script>
<style scoped></style>
