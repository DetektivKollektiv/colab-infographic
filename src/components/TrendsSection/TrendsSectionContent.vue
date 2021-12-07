<template>
    <transition :name="transition_name" @after-leave="afterLeave">
        <div class="flex flex-col items-center" v-if="!animation_ongoing">
            <h1>{{ currentTrend.headline }}</h1>
            <div class="flex flex-row justify-center">
                <button class="arrow-button" @click="nextTrend(false)">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div>{{ currentTrend.text }}</div>
                <button class="arrow-button" @click="nextTrend(true)">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import TrendsSectionContainer from "./TrendsSectionContainer.vue"
export default {
    props: ['contentFilename', 'trendData'],
    data() {
        return {
            currentTrendCount: 1,
            animation_ongoing: false,
            transition_name: "next"
        };
    },
    computed: {
        currentTrend: function () {
            for (const trend of this.trendData) {
                if (trend["id"] == this.currentTrendCount) {
                    return trend;
                }
            }
        }
    },
    methods: {
        nextTrend(up) {
            this.animation_ongoing = true
            if (up == true) {
                this.transition_name = "next"
                if (this.currentTrendCount < this.trendData.length) {
                    this.currentTrendCount++;
                }
                else {
                    this.currentTrendCount = 1;
                }
            }
            else {
                this.transition_name = "prev";
                if (this.currentTrendCount > 1) {
                    this.currentTrendCount--;
                }
                else {
                    this.currentTrendCount = this.trendData.length;
                }
            }
        },
        afterLeave() {
            this.animation_ongoing = false;
        }

    },
}

</script>

<style scoped>
.next-enter-active {
    animation: spin-in-left 2s !important;
    transform-origin: center 500vh !important;
}
.next-leave-active {
    animation: spin-in-right 2s reverse;
    transform-origin: center 500vh;
}

.prev-enter-active {
    animation: spin-in-right 2s !important;
    transform-origin: center 500vh !important;
}

.prev-leave-active {
    animation: spin-in-left 2s reverse;
    transform-origin: center 500vh;
}

@keyframes spin-in-left {
    0% {
        transform: rotate(-20deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
@keyframes spin-in-right {
    0% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>