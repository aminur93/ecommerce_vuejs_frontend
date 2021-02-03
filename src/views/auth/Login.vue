<template>
    <div id="login">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="12" md="6"  offset-md="3">

                    <v-card>
                        <v-card-title class="justify-center ctitle">Login in</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="login">
                                <v-text-field type="email" v-model="loginData.email" label="Email" prepend-icon="mdi-email"></v-text-field>
                                <span v-if="errors.email" class="red--text">{{errors.email[0]}}</span>

                                <v-text-field type="password" v-model="loginData.password" label="Password" prepend-icon="mdi-lock"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-row>
                                    <v-col col="12" sm="6" md="8" class="mt-2">
                                        <router-link to="/forget-password" class="link">forget Password</router-link>
                                    </v-col>

                                    <v-col col="4" md="4">
                                        <v-btn type="submit" color="success float-right">Login</v-btn>
                                    </v-col>

                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>

    export default {
        name: "Login",
        title: "Ecommerce - Admin login",
        data(){
            return{
                loginData: {
                    email: '',
                    password: ''
                },

                errors: {},
            }
        },

        methods: {
            login: async function(){
                try {
                    let formData = new FormData();
                    formData.append('email', this.loginData.email);
                    formData.append('password', this.loginData.password);

                    await this.$store.dispatch('login', formData).then(() => {
                        this.$router.push({ path: '/dashboard' });
                        this.loginData = {};
                    })
                }catch (e) {
                    switch (e.response.status)
                    {
                        case 422:
                            this.errors = e.response.data.errors;
                            break;

                        default:
                            this.$swal.fire({
                                icon: 'error',
                                text: 'Oops',
                                title: e.response.data.error,
                            });
                            break;
                    }
                }
            }
        },
    }
</script>

<style scoped>
    .link{
        text-decoration: none !important;
        color: green;
    }
    .v-card.theme--light{
        margin-top: 100px;
    }
    .ctitle{
        background-color: green;
        color: white;
    }
</style>