<template>
    <div>
        <form @submit.prevent="simpan">
            <div class="flex flex-col space-y-5">
                <div class="flex flex-col space-y-2">
                    <label class="text-gray-800">Hari:</label>
                    <input
                        type="text"
                        class="px-4 py-2 rounded shadow focus:outline-none"
                        v-model="form.hari"
                        placeholder="Hari"
                    />
                </div>
                <div class="flex flex-col space-y-2">
                    <label class="text-gray-800">Kegiatan:</label>
                    <input
                        type="text"
                        class="px-4 py-2 rounded shadow focus:outline-none"
                        v-model="form.kegiatan"
                        placeholder="Kegiatan"
                    />
                </div>
            </div>
            <button
                type="submit"
                :disabled="isLoading"
                class="px-4 py-2 bg-blue-500 rounded shadow text-white mt-5"
            >Simpan</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                hari: "",
                kegiatan: ""
            }
        };
    },

    computed: {
        isLoading() {
            return this.$store.state.agenda.isLoading;
        }
    },

    methods: {
        simpan() {
            this.$store.dispatch("simpanAgenda", this.form);
            this.form = {
                hari: "",
                kegiatan: ""
            };
        }
    }
};
</script>

<style>
</style>