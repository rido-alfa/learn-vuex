<template>
    <h1 class="text-2xl font-medium mb-4 text-gray-800 mb-5">Donasi</h1>
    <div class="flex w-full space-x-10">
        <div class="bg-white p-2 flex flex-col space-y-5">
            <Donatur @selectedDonatur="selectedDonatur" />
            <Clients @selectedBantuan="selectedBantuan" />
            <div class="flex flex-col">
                <label class="text-gray-800">Jumlah Donasi (Rp)</label>
                <input class="bg-gray-300 p-2 rounded focus:outline-none" type="number" v-model="jumlah" placeholder="Jumlah" />
            </div>
            <div>
                <button
                class="px-4 py-2 bg-blue-500 text-white rounded w-full focus:outline-none"
                    @click="submitDonasi"
                    :disabled="isLoading"
                >{{ isLoading ? 'Loading' : 'Donasi' }}</button>
            </div>
        </div>
        <div>
            <Transaksi />
        </div>
    </div>
</template>

<script>
import Donatur from "./Donatur";
import Transaksi from "./Transaksi";
import Clients from "./Clients";
export default {
    components: { Donatur, Transaksi, Clients },
    data() {
        return {
            donatur: "",
            clients: "",
            jumlah: ""
        };
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }
    },

    methods: {
        selectedDonatur(val) {
            this.donatur = val;
        },

        selectedBantuan(val) {
            this.clients = val;
        },

        submitDonasi() {
            const data = {
                id: Math.random()
                    .toString(36)
                    .substring(7),
                donatur: this.donatur,
                bantuan: this.clients,
                jumlah: this.jumlah
            };
            this.$store.dispatch("transaksi/saveDonasi", data);
        }
    }
};
</script>