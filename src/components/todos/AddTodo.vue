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
                    class="px-2 py-1 rounded bg-blue-500 text-white shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100"
                    type="submit"
                >Create</button>
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
            if (this.title === "") {
                alert("Todo tidak boleh kosong");
            } else {
                this.addTodo(this.title);
                this.title = "";
            }
        }
    }
};
</script>

<style>
</style>