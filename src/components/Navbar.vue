<template>
    <div class="w-full px-2 py-4 bg-gray-900 text-white mb-5">
        <div class="flex items-center max-w-5xl m-auto">
            <div class="mr-5">
                <h2 class="font-medium text-xl">Vuex App</h2>
            </div>
            <div class="flex space-x-4">
                <router-link to="/" class="text-gray-100 hover:text-white">Todos</router-link>
                <router-link to="/agenda" class="text-gray-100 hover:text-white">Agenda</router-link>
                <router-link to="/donasi" class="text-gray-100 hover:text-white">Donasi</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
