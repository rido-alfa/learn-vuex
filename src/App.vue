<template>
    <div class="m-auto max-w-5xl overflow-auto p-2">
        <Todos />
    </div>
</template>

<script>
import Todos from './components/todos/Todos'
export default {
	name: "App",
	components: {Todos}
};
</script>
