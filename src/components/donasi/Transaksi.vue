<template>
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
                                >Donatur</th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >Jenis Bantuan</th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >Jumlah</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(item, index) in listTransaksi " :key="index">
                                <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ index+1 }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ item.donatur }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ item.bantuan }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ item.jumlah }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState('transaksi', {
            listTransaksi: state => state.listTransaksi
        }),
        
    }
};
</script>

<style>
</style>