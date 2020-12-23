<template>
    <nav>
        <v-app-bar color="green" dense flat app style="margin-top: 100px">

            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Easy</span>
                <span>Shop</span>
            </v-toolbar-title>

            <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group style="margin-left: 20px;">

                <v-btn class="text-capitalize white--text" route to="/">
                    Home
                </v-btn>

                <v-btn class="text-capitalize white--text" route to="/shop">
                    All products
                </v-btn>

                <v-btn class="text-capitalize white--text" route to="/about">
                    About
                </v-btn>

                <v-btn class="text-capitalize white--text" route to="/contact">
                    Contact
                </v-btn>
            </v-btn-toggle>

            <v-spacer></v-spacer>

            <v-btn text small style="margin-right: 20px">
                <v-icon class="orange--text lighten-4">mdi-heart</v-icon>
            </v-btn>

            <v-btn text small style="margin-right: 20px">
                <v-icon class="yellow--text">mdi-cart</v-icon>
            </v-btn>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text small style="margin-right: 20px" v-on="on">
                        <v-icon class="white--text"> mdi-account-circle-outline</v-icon>
                    </v-btn>
                </template>

                <v-card  @click="$event.stopPropagation()">
                    <v-card-title class="success subtitle-2 justify-center">Login</v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>
                        <v-form>
                            <v-text-field label="Email" outlined></v-text-field>

                            <v-text-field label="Password" outlined></v-text-field>

                            <v-row class="justify-center">
                                <v-btn small color="success">Login</v-btn>
                            </v-row>

                            <v-row class="justify-center">
                                <span>
                                    Don't have an account?
                                 <router-link to="/sign_up" class="font-weight-bold" style="text-decoration: none;color: green">Sign Up</router-link>
                                </span>
                            </v-row>

                            <v-row class="justify-center">
                                <span>
                                    <router-link to="/forget_password" class="font-weight-bold" style="text-decoration: none;color: green">Forget Password</router-link>
                                </span>
                            </v-row>

                        </v-form>

                    </v-card-text>
                </v-card>
            </v-menu>

        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        title: "Ecommerce - Home",
        data(){
            return{
                text: 'center'
            }
        },
    }
</script>

<style scoped>
.v-menu__content.theme--light{
    top: 148px !important;
}
</style>