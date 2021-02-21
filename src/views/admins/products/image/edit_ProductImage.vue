<template>
    <div id="edit_product_image">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Products Images</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Products Images</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateProductsImages">

                                <v-row>
                                    <v-col cols="12">
                                        <label for="">Product Image Upload</label>
                                        <vue-dropzone
                                                ref="myVueDropzone"
                                                id="dropzone"
                                                :options="dropzoneOptions"
                                                @vdropzone-complete="uploadSuccess"
                                        >
                                        </vue-dropzone>
                                    </v-col>


                                </v-row>

                                <v-row>
                                    <v-col cols="12" v-if="editProductImage.image">
                                        <label for="">Upload Image</label>
                                        <br>

                                        <span class="mt-2">

                                                <img :src="editImage(editProductImage.image)" alt="" width="150px">

                                                <v-btn text x-small elevation="2" color="primary" class="ml-2" style="margin-top: -22px" v-on:click="deleteProductImage()">
                                                    <v-icon left small>mdi-delete</v-icon>
                                                    <span class="text-lowercase">Delete</span>
                                                </v-btn>

                                            </span>
                                    </v-col>
                                </v-row>


                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router :to="`/dashboard/product_image/${editProductImage.product_id}`">Back</v-btn>
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

    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "edit_ProductImage",
        title: "Dashboard - Edit Product Image",
        components: {
            vueDropzone: vue2Dropzone
        },
        data(){
            return{
                files: '',

                errors: {},

                dropzoneOptions: {
                    maxFiles: 1000,
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 200,
                    thumbnailHeight: 150,
                    addRemoveLinks: true,
                    uploadMultiple: true,
                    acceptedFiles: ".jpg, .jpeg, .png",
                    dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD ME"
                },
            }
        },

        computed: {
            ...mapState({
                editProductImage: state => state.product.product_image,
                message: state => state.product.success_message
            })
        },

        mounted(){
            this.getEditProductImage(this.$route.params.image_id);
        },

        methods: {
            ...mapActions({
                getEditProductImage: 'product/edit_product_image'
            }),

            uploadSuccess(response) {
                this.files = response;
            },

            editImage(img){
                let server_path = this.$store.state.serverPath;

                return server_path+"/assets/admin/uploads/original_image/"+img;

            },

            deleteProductImage: async function(){

            },

            updateProductsImages: async function(){

            }
        },
    }
</script>

<style scoped>

</style>