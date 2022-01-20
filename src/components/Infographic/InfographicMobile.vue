<template>
    <div class="bg-red-500">
        <div class="container-box py-12 text-white">
            <TextBlock>
                <template v-slot:title>
                    <h1>
                        Eine detaillierte Ansicht <br />
                        ist leider nur für Desktop verfügbar
                    </h1>
                </template>
                <template v-slot:description>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis distinctio id, amet consequuntur libero a
                        aliquam laudantium ducimus error cupiditate minima totam
                        adipisci iste quia harum eveniet iure dicta. Asperiores.
                    </p>
                </template>
            </TextBlock>
            <img class="mt-12" src="@/assets/infographic_image.png" />
        </div>
    </div>
</template>
<script></script>
