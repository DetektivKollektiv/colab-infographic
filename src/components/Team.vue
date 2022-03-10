<template>
    <div class="border-t-2 border-red-500 bg-yellow-400">
        <div
            class="container-box flex flex-col justify-between space-y-4 py-12 text-black lg:flex-row lg:items-center"
        >
            <div class="mt-12 mr-8 lg:mt-0">
                <TextBlock>
                    <template v-slot:title>
                        <h1>Über das Projekt</h1>
                    </template>
                    <template v-slot:description>
                        <p>
                            Im betterplace lab / Das NETTZ beschäftigen wir uns mit der Gestaltung von Gesellschaft in
                            einer digitalen Welt. Für uns ist dies vor allem eine Frage der Kollaboration. So haben sich
                            im betterplace co:lab verschiedene Akteur*innen zusammengefunden – begleitet durch ein
                            Qualifizierungsprogramm und eine Organisationsentwicklerin – um gemeinsam der Frage nachzugehen, wie Zusammenarbeit im komplexen Themenfeld Desinformation aussehen
                            kann. Entstanden ist eine interaktive Landkarte zum Themenfeld, die den Entstehungsprozess von Desinformation in Form einer Wertschöpfungskette beschreibt und gesellschaftliche Entwicklungslinien mit in den Blick nimmt.
                        </p>
                    </template>
                </TextBlock>
            </div>
            <div>
                <TextBlock>
                    <template v-slot:title>
                        <h2>Die interaktive Landkarte zum Themenfeld Desinformation ist eine Kollaboration von:</h2>
                    </template>
                    <template v-slot:description>
                        <div>
                            <div class="mb-4">
                                <h3 class="border-b-2 border-red-500">Projektkoordination</h3>
                                <p>Katja Jäger (betterplace lab)</p>
                            </div>
                            <div class="mb-4">
                                <h3 class="border-b-2 border-red-500">Konzept und Inhalt</h3>
                                <p>Stefan Sippell und Nikolas Gritsch (Vince&Vert, auf Basis eines Modells von legacies.now), Joana Breidenbach und Katja Jäger (betterplace lab)</p>
                            </div>
                            <div class="mb-4">
                                <h3 class="border-b-2 border-red-500">Design & Implementierung</h3>
                                <p>Patrick Müller und Henning Trenkamp (codetekt), Gorm Labenz</p>
                            </div>
                        </div>
                    </template>
                </TextBlock>
            </div>
        </div>
    </div>
</template>
<script></script>
