<template>
    <div id="add_material">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Materials</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Materials</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addMaterial">

                                <v-text-field type="text" v-model="materialData.material_name" label="Material name"></v-text-field>
                                <span v-if="errors.material_name" class="red--text">{{errors.material_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/material">Back</v-btn>
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
        name: "add_material",
        title: "DashBoard - Add Material",
        data(){
            return{
                materialData: {
                    material_name: ''
                },

                errors: {}
            }
        },

        computed: {
            ...mapState({
                message: state => state.material.success_message
            })
        },

        methods: {
            addMaterial: async function(){
                try {
                    let formData = new FormData();
                    formData.append('material_name', this.materialData.material_name);

                    await this.$store.dispatch('material/add_material', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.materialData = {};
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