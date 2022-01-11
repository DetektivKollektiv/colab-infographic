<template>
    <Hero></Hero>
    <WSK :index="2"></WSK>
    <div class="space-y-8 mt-8 container-box">
        <WerWie>
            <template v-slot:title>
                <h3>Wer</h3>
            </template>
            <template v-slot:description>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam illo maxime fugiat corrupti adipisci.
                </p>
            </template>
        </WerWie>
        <WerWie>
            <template v-slot:title>
                <h3>Wie</h3>
            </template>
            <template v-slot:description>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam illo maxime fugiat corrupti adipisci.
                </p>
            </template>
        </WerWie>
    </div>
</template>

<script setup>
import Hero from '@/components/Story/Hero.vue'
import WerWie from '@/components/Story/WerWie.vue'

import WSK from '@/components/WSK.vue'
</script>
