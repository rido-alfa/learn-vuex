<template>
    <div class="flex flex-col">
        <label class="text-gray-800">Donatur</label>
        <select
        class="bg-gray-300 p-2 rounded focus:outline-none"
            @change="$emit('selectedDonatur', $event.target.options[$event.target.options.selectedIndex].innerText)"
        >
            <option>Pilih Donatur</option>
            <option
                v-for="donatur in listDonatur"
                :key="donatur.id"
                :value="donatur.nama"
            >{{ donatur.nama }}</option>
        </select>
    </div>
</template>

<script>
export default {
    computed: {
        listDonatur() {
            return this.$store.state.donatur.listDonatur;
        }
    }
};
</script>

<style>
</style>