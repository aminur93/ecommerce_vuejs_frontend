<template>
    <div id="add_category">

        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Category</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Category</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addCategory">
                                <v-text-field type="text" v-model="categoryData.cat_name" label="Category name"></v-text-field>
                                <span v-if="errors.cat_name" class="red--text">{{errors.cat_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/category">Back</v-btn>
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
    export default {
        name: "add_category",
        title: "Dashboard - Add Category",

        data(){
            return{
                categoryData: {
                    cat_name: ''
                },

                errors: {}
            }
        },

        methods: {
            addCategory: async function(){
                try {
                    let formData = new FormData();
                    formData.append('cat_name', this.categoryData.cat_name);

                    await this.$store.dispatch('category/add_category', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Category Added Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.categoryData = {};
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
        }
    }
</script>

<style scoped>

</style>