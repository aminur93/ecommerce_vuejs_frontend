<template>
    <div id="edit_category">

        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit category</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Category</v-card-title>
                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateCategory">
                                <v-text-field type="text" v-model="editCategoryData.cat_name" label="Category Name"></v-text-field>
                                <span v-if="errors.cat_name" class="red--text">{{errors.cat_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/category">Back</v-btn>
                                    <v-btn text type="submit" class="success mr-2">Edit</v-btn>
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
        name: "edit_category",
        title: "Dashboard - Edit category",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editCategoryData: state => state.category.category
            })
        },

        mounted(){
            this.editCategory(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                editCategory: 'category/edit_category'
            }),

            updateCategory: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();

                    formData.append('cat_name', this.editCategoryData.cat_name);

                    await this.$store.dispatch('category/update_category', {id: id, data: formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Category Updated Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.editCategory(id);
                    });

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
            },
        },
    }
</script>

<style scoped>

</style>