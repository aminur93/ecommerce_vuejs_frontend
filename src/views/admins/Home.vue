<template>
    <v-app>

        <Navbar />

        <v-main class="mx-4 mb-4">
            <router-view></router-view>
        </v-main>

        <v-footer padless>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>AminurDev.io</strong>
            </v-col>
        </v-footer>

    </v-app>
</template>

<script>
    import Navbar from '../../components/admin/Navbar';

    export default {
        name: "Home",
        title: "Dashboard",
        components: {
            Navbar
        }
    }
</script>

<style scoped>

</style>