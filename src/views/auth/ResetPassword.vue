<template>
    <div id="reset_password">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="12" md="6"  offset-md="3">

                    <v-card>
                        <v-card-title class="justify-center ctitle">Reset Password</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-form v-on:submit.prevent="resetPassword">

                                <v-text-field type="email" v-model="resetData.email" label="Email" prepend-icon="mdi-email"></v-text-field>
                                <span v-if="errors.email" class="red--text">{{errors.email[0]}}</span>

                                <v-text-field type="password" v-model="resetData.password" label="Password" prepend-icon="mdi-lock"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-text-field type="password" v-model="resetData.password_confirmation" label="Password Confirmation" prepend-icon="mdi-lock"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-row>
                                    <v-col>
                                        <v-btn type="submit" color="success float-right">Reset Now</v-btn>
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
        name: "ResetPassword",
        title: "Ecommerce - Admin Reset Password",
        data(){
            return{
                resetData: {
                    email: '',
                    password: '',
                    password_confirmation: ''
                },

                errors: {}
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