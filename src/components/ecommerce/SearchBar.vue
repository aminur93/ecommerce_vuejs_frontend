<template>
    <nav>
        <v-app-bar flat height="100px" app>

            <v-row class="justify-end">
                <v-col cols="2" class="mt-5">
                    <h3 class="subtitle-1 mt-2">EasyShop</h3>
                </v-col>

                <v-col cols="8" class="mt-5">
                    <v-form>

                        <v-text-field
                                dense
                                solo
                                label="Search Products"
                                prepend-inner-icon="mdi-magnify"
                        ></v-text-field>

                    </v-form>
                </v-col>

                <v-col cols="2" class="mt-5" style="margin-left: -20px">
                    <v-btn medium class="success">Search</v-btn>
                </v-col>
            </v-row>

        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: "SearchBar"
    }
</script>

<style scoped>
    .fixed-bar {
        position: sticky;
        position: -webkit-sticky; /* for Safari */
        top: 6em;
        z-index: 2;
    }
</style>