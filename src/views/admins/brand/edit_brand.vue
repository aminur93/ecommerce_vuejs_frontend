<template>
    <div id="edit_brand">

        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Brand</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Brand</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateBrand">
                                <v-text-field type="text" v-model="editBrand.brand_name" label="Brand name"></v-text-field>
                                <span v-if="errors.brand_name" class="red--text">{{errors.brand_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/brand">Back</v-btn>
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
        name: "edit_brand",
        title: "DashBoard - Edit Brand",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editBrand: state => state.brand.brand,
                message: state => state.brand.success_message
            })
        },

        mounted(){
            this.getEditBrand(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                'getEditBrand': 'brand/edit_brand'
            }),

            updateBrand: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('brand_name', this.editBrand.brand_name);

                    await this.$store.dispatch('brand/update_brand', {id:id, data:formData}).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                }catch (error) {
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        default:
                            this.$swal.fire({
                                icon: 'error',
                                text: 'Oops',
                                title: error.response.data.message,
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