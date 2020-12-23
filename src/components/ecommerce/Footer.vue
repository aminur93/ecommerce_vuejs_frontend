<template>
    <v-card>
        <v-footer padless>
            <v-card
                    flat
                    tile
                    width="100%"
                    class="green lighten-1 white--text text-center"
            >
                <v-card-text>
                    <v-row>

                        <v-col cols="3" class="text-justify">
                            <h1 class="font-weight-bold subtitle-1 white--text">Download</h1>

                            <img src="/store3.png" alt="" width="168px" style="margin-left: -10px"><br>
                            <img src="/apple1.png" alt="" width="150px">
                        </v-col>

                        <v-col cols="3" class="text-justify">
                            <h1 class="font-weight-bold subtitle-1 white--text">Menu</h1>

                            <span class="font-weight-bold">Privacy Policy</span><br>

                            <span class="font-weight-bold">Cookie Policy</span><br><br>

                            <span class="font-weight-bold">Purchasing Policy</span><br>

                            <span class="font-weight-bold">Terms & Condition</span>

                        </v-col>

                        <v-col cols="3" class="text-justify">
                            <h1 class="font-weight-bold subtitle-1 white--text">Address</h1>

                            <span class="font-weight-bold">House #8, Road # 14,</span><br>

                            <span class="font-weight-bold">Dhanmondi, Dhaka-1209.</span><br><br>

                            <span class="font-weight-bold">Email: support@easyshop.com.bd</span><br>

                            <span class="font-weight-bold"> Contact no: 09638111666</span>
                        </v-col>

                        <v-col cols="3" class="text-justify">
                            <h1 class="font-weight-bold white--text subtitle-1">Get in touch</h1>

                            <v-btn medium class="success">
                                <v-icon color="white">mdi-facebook</v-icon>
                            </v-btn>

                            <v-btn class="success ml-3">
                                <v-icon color="white">mdi-youtube</v-icon>
                            </v-btn>

                            <v-btn class="success ml-3">
                                <v-icon color="white">mdi-twitter</v-icon>
                            </v-btn>

                        </v-col>

                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    &copy; {{ new Date().getFullYear() }} <strong>EasyShop. </strong>All rights reserved.
                </v-card-text>
            </v-card>
        </v-footer>
    </v-card>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                items: [
                    {text: 'Privacy Policy', route: ''},
                    {text: 'Cookie Policy', route: ''},
                    {text: 'Purchasing Policy', route: ''},
                    {text: 'Terms & Condition', route: ''},
                ]
            }
        },
    }
</script>

<style scoped>

</style>