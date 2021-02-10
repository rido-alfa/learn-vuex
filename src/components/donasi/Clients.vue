<template>
    <div class="flex flex-col">
        <label class="text-gray-800">Jenis Bantuan</label>
        <select
        class="bg-gray-300 p-2 rounded focus:outline-none"
            @change="$emit('selectedBantuan', $event.target.options[$event.target.options.selectedIndex].innerText)"
        >
            <option>Pilih Bantuan</option>
            <option
                v-for="bantuan in listBantuan"
                :key="bantuan.id"
                :value="bantuan.id"
            >{{ bantuan.nama }}</option>
        </select>
    </div>
</template>

<script>
export default {
    computed: {
        listBantuan() {
            return this.$store.state.clients.listBantuan;
        }
    }
};
</script>

<style>
</style>