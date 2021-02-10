<template>
    <div>
        <h1 class="text-2xl font-medium mb-4 text-gray-800">Todos</h1>
        <div class="flex justify-between mb-5 items-center">
            <div>
                <AddTodo />
            </div>
            <div>
                <FilterTodos />
            </div>
        </div>
        <div class="w-full flex justify-between">
            <span class="text-gray-800">Double click to mark as completed</span>
            <span class="text-gray-800">
                <span class="w-4 h-4 px-2 bg-gray-500 rounded mr-2 shadow"></span> = Incompleted
            </span>
            <span class="text-gray-800">
                <span class="w-4 h-4 px-2 bg-white rounded mr-2 shadow"></span> = Completed
            </span>
        </div>
        <div class="grid grid-cols-3 gap-2 my-3">
            <div
                class="px-4 py-2 rounded shadow text-white text-center flex items-center justify-between"
                @dblclick="updateTodo(item)"
                v-for="item in getAllTodos"
                :key="item.id"
                :class="item.completed == false ? 'bg-gray-500' : 'bg-white text-gray-800' "
            >
                <div>{{ item.title }}</div>
                <div>
                    <button class="focus:outline-none" @click="deleteTodo(item.id)">
                        <svg
                            class="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo";
import FilterTodos from "./FilterTodos";
export default {
    components: { AddTodo, FilterTodos },
    methods: {
        ...mapActions(["fetchTodos", "deleteTodo", "editTodo"]),

        updateTodo(item) {
            const data = {
                id: item.id,
                title: item.title,
                completed: !item.completed
            };
            this.editTodo(data);
        }
    },
    computed: {
        ...mapGetters(["getAllTodos"])
    },
    created() {
        this.fetchTodos();
    }
};
</script>

<style>
</style>