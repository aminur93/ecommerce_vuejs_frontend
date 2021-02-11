<template>
    <div id="edit_origin">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Origin</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Origin</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateOrigin">

                                <v-text-field type="text" v-model="editOriginData.origin_name" label="Origin name"></v-text-field>
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
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "edit_origin",
        title: "DashBoard - Edit origin",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editOriginData: state => state.origin.origin,
                message: state => state.origin.success_message
            })
        },

        mounted(){
            this.getEditOriginData(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                'getEditOriginData': 'origin/edit_origin'
            }),

            updateOrigin: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('origin_name', this.editOriginData.origin_name);

                    await this.$store.dispatch('origin/update_origin', {id:id, data:formData}).then(()=> {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.getEditOriginData(id);
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