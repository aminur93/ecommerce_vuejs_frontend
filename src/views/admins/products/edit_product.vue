<template>
    <div id="edit_product">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Products</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Products</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateProducts">

                                <v-row>
                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                v-on:change='getSubCategory(editProductData.category_id)'
                                                :items="categories"
                                                item-text="cat_name"
                                                item-value="id"
                                                v-model="editProductData.category_id"
                                                label="Category"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>

                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                v-if="editProductData.category_id !== null"
                                                :items="editProductData.category_id === editProductData.sub_category_id ? allSubCategories : sub_categories"
                                                item-text="sub_cat_name"
                                                item-value="id"
                                                v-model="editProductData.sub_cat_id"
                                                label="Sub Category"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>

                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                :items="brands"
                                                item-text="brand_name"
                                                item-value="id"
                                                v-model="editProductData.brand_id"
                                                label="Brand"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>

                                </v-row>

                                <v-row>
                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                :items="materials"
                                                item-text="material_name"
                                                item-value="id"
                                                v-model="editProductData.material_id"
                                                label="Material"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>

                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                :items="origins"
                                                item-text="origin_name"
                                                item-value="id"
                                                v-model="editProductData.origin_id"
                                                label="Origin"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>

                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                :items="tags"
                                                item-text="tag_name"
                                                item-value="id"
                                                v-model="editProductData.tag_id"
                                                label="Tag"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>
                                </v-row>


                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="editProductData.code" label="Product Code"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="editProductData.name" label="Product Name"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="editProductData.model_number" label="Product Model Number"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="editProductData.title" label="Product Title"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="editProductData.price" label="Product Price"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="editProductData.weight" label="Product Weight"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-if="authenticated" :value="userInfo.name" label="Author"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="date" v-model="editProductData.date" label="Date"></v-text-field>
                                    </v-col>
                                </v-row>

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
                                    <v-col cols="12" v-if="editProductData.image">
                                        <label for="">Upload Image</label><br>

                                        <span class="mt-2">

                                            <img :src="editImage(editProductData.image)" alt="" width="150px">

                                            <v-btn text x-small elevation="2" color="primary" class="ml-2" style="margin-top: -22px" v-on:click="deleteImage()">
                                                <v-icon left small>mdi-delete</v-icon>
                                                <span class="text-lowercase">Delete</span>
                                            </v-btn>

                                        </span>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="12">
                                        <label for="">Product Description</label>
                                        <vue-editor v-model="editProductData.description" />
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="4">
                                        <v-checkbox
                                                v-model="editProductData.approve"
                                                :input-value="editProductData.approve === false ? 0 : 1"
                                                label="Approve"
                                                color="success"
                                                hide-details
                                        ></v-checkbox>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-checkbox
                                                v-model="editProductData.publish"
                                                :input-value="editProductData.publish === false ? 0 : 1"
                                                label="Publish"
                                                color="primary"
                                                hide-details
                                        ></v-checkbox>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-checkbox
                                                v-model="editProductData.feature"
                                                :input-value="editProductData.feature === false ? 0 : 1"
                                                label="Feature"
                                                color="orange"
                                                hide-details
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>


                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/product">Back</v-btn>
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
    import {mapGetters, mapState, mapActions} from 'vuex';

    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    import { VueEditor } from "vue2-editor";

    export default {
        name: "edit_product",
        title: "DashBoard - Edit Product",
        components: {
            vueDropzone: vue2Dropzone,
            VueEditor: VueEditor
        },

        data(){
            return{
                files: null,
                errors: {},

                items: [],

                ex4: ['red',
                    'indigo',
                    'orange',
                    'primary',
                    'secondary',
                    'success',
                    'info',
                    'warning',
                    'error',
                    'red darken-3',
                    'indigo darken-3',
                    'orange darken-3'],

                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 200,
                    thumbnailHeight: 150,
                    addRemoveLinks: true,
                    acceptedFiles: ".jpg, .jpeg, .png",
                    dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD ME"
                },
            }
        },

        computed: {
            ...mapGetters({
                authenticated: 'authenticated',
                userInfo: 'userInfo',
            }),
            ...mapState({
                categories: state => state.category.categories,
                allSubCategories: state => state.subCategory.sub_categories,
                sub_categories: state => state.product.sub_categories,
                brands: state => state.brand.brands,
                materials: state => state.material.materials,
                origins: state => state.origin.origins,
                tags: state => state.tag.tags,
                editProductData: state => state.product.product,
                message: state => state.product.success_message
            })
        },

        mounted(){
            this.getCategories();
            this.getBrands();
            this.getMaterials();
            this.getOrigins();
            this.getTags();
            this.getEditProduct(this.$route.params.id);
            this.getEditSubCategories();
        },

        methods: {

            ...mapActions({
                getCategories: 'category/get_categories',
                getEditSubCategories: 'subCategory/get_subCategories',
                getSubCategories: 'product/get_subCategories',
                getBrands: 'brand/getBrands',
                getMaterials: 'material/get_material',
                getOrigins: 'origin/get_origin',
                getTags: 'tag/get_tag',
                getEditProduct: 'product/edit_product'

            }),

            getSubCategory: function(category_id) {
                this.getSubCategories(category_id);
            },

            uploadSuccess(response) {
                this.files = response;
            },

            editImage(img){
                let server_path = this.$store.state.serverPath;

                return server_path+"/assets/admin/uploads/original_image/"+img;

            },

            deleteImage: async function(){
                try {
                    let id = this.$route.params.id;

                    await this.$store.dispatch('product/product_image_delete', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.getEditProduct(id);
                    })
                }catch (e) {
                    this.$swal.fire({
                        icon: 'error',
                        text: 'Oops',
                        title: e.response.data.error,
                    });
                }
            },

            updateProducts: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('category_id', this.editProductData.category_id);
                    formData.append('sub_cat_id', this.editProductData.sub_cat_id);
                    formData.append('tag_id', this.editProductData.tag_id);
                    formData.append('brand_id', this.editProductData.brand_id);
                    formData.append('author_id', this.userInfo.id);
                    formData.append('name', this.editProductData.name);
                    formData.append('title', this.editProductData.title);
                    formData.append('model_number', this.editProductData.model_number);
                    formData.append('code', this.editProductData.code);
                    formData.append('description', this.editProductData.description);
                    formData.append('current_image', this.editProductData.image,);

                    if (this.files)
                    {
                        formData.append('image', this.files, this.files.name);
                    }

                    formData.append('material_id', this.editProductData.material_id);
                    formData.append('origin_id', this.editProductData.origin_id);
                    formData.append('price', this.editProductData.price);
                    formData.append('weight', this.editProductData.weight);
                    formData.append('feature', this.editProductData.feature);
                    formData.append('approve', this.editProductData.approve);
                    formData.append('publish', this.editProductData.publish);
                    formData.append('date', this.editProductData.date);

                    await this.$store.dispatch('product/update_product', {id:id, data:formData}).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.getEditProduct(id);

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
        }
    }
</script>

<style scoped>
    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
</style>