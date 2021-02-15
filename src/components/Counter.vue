<template>
    <h1 class="text-2xl font-medium mb-4 text-gray-800">Counter, Vuex With Composition API</h1>
    <div class="w-full flex flex-wrap justify-center m-auto">
        <img src="../assets/logo.png" alt />
        <div class="w-full flex flex-col">
            <div class="w-52 m-auto">
                <div class="text-center">
                    <h1 :style="{color: store.state.counter.colorCode}" class="text-5xl">{{ counter }}</h1>
                </div>
                <div class="text-center mt-2">
                    {{ counter }}
                    <sup>2</sup>
                    =
                    {{ store.getters.counterSquared }}
                </div>
            </div>
            <div class="m-auto flex space-x-3 my-3">
                <button @click="decreaseCounter" class="w-20 h-10 text-2xl border bg-white">-</button>
                <button @click="increaseCounter" class="w-20 h-10 text-2xl border bg-white">+</button>
            </div>
            <div class="m-auto">
                <input v-model="colorCode" placeholder="Enter the Color code" type="text" />
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const counter = computed(() => store.state.counter.counter);
        const colorCode = computed({
            get()  {
                return store.state.counter.colorCode
            }, 
            set(val) {
                store.commit('setColorCode', val)
            }
        })

        function increaseCounter() {
            store.commit("increaseCounter");
        }

        function decreaseCounter() {
            store.commit("decreaseCounter");
        }

        return {
            store,
            increaseCounter,
            decreaseCounter,
            counter,
            colorCode
        };
    }
};
</script>

<style>
</style>