<template>
    <div id="edit_sub_category">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Sub Category</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Sub Category</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="editSubCategory">

                                <v-select
                                        :items="categories"
                                        item-text="cat_name"
                                        item-value="id"
                                        label="Select Category"
                                        dense
                                        v-model="editSubCat.category_id"
                                >
                                </v-select>

                                <v-text-field type="text" v-model="editSubCat.sub_cat_name" label="Sub category name"></v-text-field>
                                <span v-if="errors.sub_cat_name" class="red--text">{{errors.sub_cat_name[0]}}</span>


                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/sub_category">Back</v-btn>
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
        name: "edit_sub_category",
        title: "Dashboard - Edit Subcategory",
        data(){
            return{
                errors: {},
            }
        },

        computed: {
            ...mapState({
                editSubCat: state => state.subCategory.sub_category,
                categories : state => state.category.categories
            })
        },

        mounted(){
            this.editSubcategory(this.$route.params.id);
            this.getCategories();
        },

        methods: {
            ...mapActions({
                 'editSubcategory': 'subCategory/edit_subCategory',
                'getCategories' : 'category/get_categories'
            }),

            editSubCategory: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('category_id', this.editSubCat.category_id);
                    formData.append('sub_cat_name', this.editSubCat.sub_cat_name);

                    await this.$store.dispatch('subCategory/update_subCategory', {id:id, data:formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Sub Category Added Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })
                }catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>

<style scoped>

</style>