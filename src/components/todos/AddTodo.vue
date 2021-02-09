<template>
    <div class="w-full flex">
        <form @submit.prevent="onSubmit">
            <div class="flex space-x-1">
                <input
                    class="px-2 py-1 rounded shadow w-96 focus:outline-none focus:ring-2 focus:ring-green-100 text-gray-700"
                    type="text"
                    v-model="title"
                    placeholder="Add Todo..."
                />
                <button
                    class="px-2 py-1 rounded bg-green-500 text-white shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100"
                    type="submit"
                >Add</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            title: ""
        };
    },
    methods: {
        ...mapActions(["addTodo"]),
        onSubmit() {
            this.addTodo(this.title);
        }
    }
};
</script>

<style>
</style>