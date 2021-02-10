<template>
    <div class="my-3">
        <span class="text-gray-800">Filter: </span>
        <select
            @change="filterTodos($event)"
            class="w-20 bg-white px-3 rounded focus:outline-none focus:ring-2 focus:ring-green-100 border"
        >
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: mapActions(["filterTodos"])
};
</script>

<style>
</style>