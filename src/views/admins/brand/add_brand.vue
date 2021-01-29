<template>
    <div id="add_brand">

        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Brand</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Brand</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addBrand">
                                <v-text-field type="text" v-model="brandData.brand_name" label="Brand name"></v-text-field>
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
    import {mapState} from 'vuex';

    export default {
        name: "add_brand",
        title: "Dashboard - Add Brand",
        data(){
            return{
                brandData: {
                    brand_name: ''
                },

                errors: {}
            }
        },

        computed: {
            ...mapState({
                message: state => state.brand.success_message
            })
        },

        methods: {
            addBrand: async function(){
                try {
                    let formData = new FormData();
                    formData.append('brand_name', this.brandData.brand_name);

                    await this.$store.dispatch('brand/addBrands', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.brandData = {};
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