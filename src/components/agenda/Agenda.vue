<template>
    <h1 class="text-2xl font-medium mb-4 text-gray-800 mb-5">Agenda</h1>
    <div class="flex w-full space-x-10">
        <div>
            <AgendaInput />
        </div>
        <div>
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >#</th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >Hari</th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >Kegiatan</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="(item, index) in agenda" :key="index">
                                        <td class="px-6 py-4 whitespace-nowrap">{{ index+1 }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap">{{ item.hari }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap">{{ item.kegiatan }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AgendaInput from "./AgendaInput";
export default {
    components: { AgendaInput },
    computed: {
        agenda() {
            return this.$store.state.agenda.listAgenda;
        }
    }
};
</script>

<style>
</style>