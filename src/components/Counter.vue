<template>
    <h1 class="text-2xl font-medium mb-4 text-gray-800">Counter, Vuex With Composition API</h1>
    <div class="w-full flex flex-wrap justify-center m-auto">
        <img src="../assets/logo.png" alt />
        <div class="w-full flex flex-col">
            <div class="m-auto">
                <h1 class="text-5xl">{{ counter }}</h1>
            </div>
            <div class="m-auto flex space-x-3 my-3">
                <button @click="decreaseCounter" class="w-20 h-10 text-2xl border bg-white">-</button>
                <button @click="increaseCounter" class="w-20 h-10 text-2xl border bg-white">+</button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const counter = computed(() => store.state.counter.counter);

        function increaseCounter() {
            store.commit("increaseCounter");
        }

        function decreaseCounter() {
            store.commit("decreaseCounter");
        }

        return {
            counter,
            increaseCounter,
            decreaseCounter
        };
    }
};
</script>

<style>
</style>