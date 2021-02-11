<template>
    <div id="forget_password">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="12" md="6"  offset-md="3">

                    <v-card>
                        <v-card-title class="justify-center ctitle">Forget Password</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-form v-on:submit.prevent="forgetPassword">
                                <v-text-field type="email" v-model="forgetData.email" label="Email" prepend-icon="mdi-email"></v-text-field>
                                <span v-if="errors.email" class="red--text">{{errors.email[0]}}</span>

                                <v-row>
                                    <v-col col="12" sm="6" md="8" class="mt-2">
                                        <router-link to="/login" class="link">Back</router-link>
                                    </v-col>

                                    <v-col col="4" md="4">
                                        <v-btn type="submit" color="success float-right">Submit</v-btn>
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
    import {mapState} from 'vuex';

    export default {
        name: "ForgetPassword",
        title: "Ecommerce - Admin Forget Password",
        data(){
            return{
                forgetData: {
                    email: ''
                },

                errors: {}
            }
        },

        computed: {
            ...mapState({
                message: state => state.success_message
            })
        },

        methods: {
            forgetPassword: async function(){
                try{

                    let formdata = new FormData();
                    formdata.append('email', this.forgetData.email);

                    await this.$store.dispatch('forgetPassword', formdata).then(() => {

                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 2500
                        });

                        this.forgetData = {};
                    })
                }catch(e) {
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
            },
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