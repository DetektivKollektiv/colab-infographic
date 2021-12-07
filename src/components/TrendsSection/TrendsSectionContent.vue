<template>
    <div class="flex flex-col container">
        <h1>{{ currentTrend.headline }}</h1>
        <transition :name="transition_name" @after-leave="afterLeave">
            <div class="flex flex-row justify-center" v-if="animation_ongoing == false">
                <button class="arrow-button" @click="nextTrend(false)">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div>{{ currentTrend.text }}</div>
                <button class="arrow-button" @click="nextTrend(true)">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </transition>
    </div>
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
                this.animate_next = true;
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
.next-enter-active{
    animation: spin-in-left 0.75s;
    transform-origin: center 500vw; 
}
@keyframes spin-in-left {
    0% {
        transform: rotate(-19deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.next-leave-active {
    animation: spin-out-right 0.75s;
    transform-origin: center 500vw; 
}
@keyframes spin-out-right {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(19deg);
    }
}

.prev-enter-active{
    animation: spin-in-right 0.75s;
    transform-origin: center 500vw; 
}
@keyframes spin-in-right {
    0% {
        transform: rotate(19deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.prev-leave-active {
    animation: spin-out-left 0.75s;
    transform-origin: center 500vw; 
}
@keyframes spin-out-left {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-19deg);
    }
}

</style>