<template>
    <div id="dashboard">

        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Welcome Dashboard</h1>
                </v-col>
            </v-row>


            <v-row wrap>
                <v-col cols="12" sm="4" md="3">
                    <v-card class="success">
                        <v-card-title>
                            Category

                            <v-row class="justify-end">
                                <v-icon large>mdi-clipboard-list</v-icon>
                            </v-row>

                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">5</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 success" route to="/dashboard/category"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>

                    </v-card>
                </v-col>

                <v-col cols="12" sm="4" md="3">
                    <v-card class="primary">
                        <v-card-title>
                            Sub Cat

                            <v-row class="justify-end">
                                <v-icon large>mdi-view-list</v-icon>
                            </v-row>
                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">10</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 primary" route to="/dashboard/subCategory"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="4" md="3">
                    <v-card class="info">
                        <v-card-title>
                            Brand

                            <v-row class="justify-end">
                                <v-icon large>mdi-emby</v-icon>
                            </v-row>
                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">200</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 info" route to="/dashboard/tag"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="4" md="3">
                    <v-card class="error">
                        <v-card-title>
                            Tag

                            <v-row class="justify-end">
                                <v-icon large>mdi-tag</v-icon>
                            </v-row>
                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">300</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 error" route to="/dashboard/blogpost"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="4" md="3">
                    <v-card color="blue">
                        <v-card-title>
                            Products

                            <v-row class="justify-end">
                                <v-icon large> mdi-storefront</v-icon>
                            </v-row>
                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">300</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 error" route to="/dashboard/blogpost"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>