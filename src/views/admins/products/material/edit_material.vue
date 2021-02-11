<template>
    <div id="edit_material">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Materials</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Materials</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateMaterial">

                                <v-text-field type="text" v-model="editMaterialData.material_name" label="Material name"></v-text-field>
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
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "edit_material",
        title: "DashBoard - Edit Material",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editMaterialData: state => state.material.material,
                message: state => state.material.success_message
            })

        },

        mounted(){
            this.getEditMaterial(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                'getEditMaterial': 'material/edit_material'
            }),

            updateMaterial: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('material_name', this.editMaterialData.material_name);

                    await this.$store.dispatch('material/update_material', {id:id, data:formData}).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.getEditMaterial(id);
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