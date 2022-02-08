<template>
    <div class="border-t-2 border-red-500 bg-blue-500">
        <div
            class="container-box flex flex-col-reverse justify-between space-y-4 py-12 text-white lg:flex-row lg:items-center"
        >
            <div class="mt-12 lg:mt-0">
                <TextBlock>
                    <template v-slot:title>
                        <h1>Die Publikation</h1>
                    </template>
                    <template v-slot:description>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reiciendis distinctio id, amet consequuntur
                            libero a aliquam laudantium ducimus error cupiditate
                            minima totam adipisci iste quia harum eveniet iure
                            dicta. Asperiores.
                        </p>
                    </template>
                </TextBlock>
                <ButtonText class="mt-4">Download</ButtonText>
            </div>
            <img
                class="lg:ml-12 lg:max-w-md"
                src="https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
        </div>
    </div>
</template>
<script></script>
