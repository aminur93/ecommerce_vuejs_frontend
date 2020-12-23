<template>
    <v-app>

        <search-bar/>

        <Header />

        <main>
            <router-view></router-view>
        </main>

        <Footer />
    </v-app>
</template>

<script>
    import Header from '../../components/ecommerce/Header.vue';
    import SearchBar from '../../components/ecommerce/SearchBar.vue';
    import Footer from '../../components/ecommerce/Footer.vue';

    export default {
        components: {
            Header,
            SearchBar,
            Footer
        },
        name: "Master"
    }
</script>

<style scoped>

</style>