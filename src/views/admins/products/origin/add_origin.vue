<template>
    <div id="add_origin">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Origin</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Origin</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addOrigin">

                                <v-text-field type="text" v-model="originData.origin_name" label="Origin name"></v-text-field>
                                <span v-if="errors.origin_name" class="red--text">{{errors.origin_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/origin">Back</v-btn>
                                    <v-btn text type="submit" class="success mr-2">Submit</v-btn>
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
        name: "add_origin",
        title: "DashBoard - Add Origin",
        data(){
            return{
                originData: {
                    origin_name: ''
                },

                errors: {}
            }
        },

        computed: {
            ...mapState({
                message: state => state.origin.success_message
            })
        },

        methods: {
            addOrigin: async function(){
                try {
                    let formData = new FormData();
                    formData.append('origin_name', this.originData.origin_name);

                    await this.$store.dispatch('origin/add_origin', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.originData = {};
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
        }
    }
</script>

<style scoped>

</style>