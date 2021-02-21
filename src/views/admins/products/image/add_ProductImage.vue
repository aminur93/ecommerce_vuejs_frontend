<template>
    <div id="add_product_image">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Products Images</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Products Images</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addProductsImages">

                                <v-row>
                                    <v-col cols="12">
                                        <label for="">Product Image Upload</label>
                                        <vue-dropzone
                                                ref="myVueDropzone"
                                                id="dropzone"
                                                :options="dropzoneOptions"
                                                @vdropzone-complete-multiple="vDropzoneCompleteMultiple"
                                        >
                                        </vue-dropzone>
                                    </v-col>
                                </v-row>


                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router :to="`/dashboard/product_image/${this.$route.params.id}`">Back</v-btn>
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

    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "add_ProductImage",
        title: "Dashboard - Add Product Image",
        components: {
            vueDropzone: vue2Dropzone
        },
        data(){
            return{
                imageData: {
                    product_id: '',
                    image: []
                },

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
                message: state => state.product.success_message
            })
        },

        methods: {
            // uploadSuccess(response) {
            //     this.imageData.image = [response.name];
            //     console.log(this.imageData.image);
            // },

            vDropzoneCompleteMultiple(response){
                this.imageData.image = response;
                console.log(response);
            },

            addProductsImages: async function(){
                try {
                    let id = this.$route.params.id;

                    let formData = new FormData();
                    formData.append('product_id', id);
                    this.imageData.image.forEach((item) => formData.append("image[]", item));

                    //formData.append("image[]", this.imageData.image.name);

                    await this.$store.dispatch('product/add_product_image', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.$refs.myVueDropzone.removeAllFiles();
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
        },
    }
</script>

<style scoped>

</style>