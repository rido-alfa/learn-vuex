<template>
    <Navbar />
    <div class="m-auto max-w-5xl overflow-auto p-2">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
    name: "App",
    components: { Navbar },
    data(){
      return {}
    }

};
</script>
