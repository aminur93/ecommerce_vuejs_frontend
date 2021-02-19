<template>
    <div id="add_product">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Products</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Products</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addProducts">

                                <v-row>
                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                v-on:change='getSubCategory()'
                                                :items="categories"
                                                item-text="cat_name"
                                                item-value="id"
                                                v-model="productData.category_id"
                                                label="Category"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>

                                    <v-col cols="4" class="d-flex" sm="4">
                                        <v-select
                                                v-if="sub_categories"
                                                :items="sub_categories"
                                                item-text="sub_cat_name"
                                                item-value="id"
                                                v-model="productData.sub_cat_id"
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
                                                v-model="productData.brand_id"
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
                                                v-model="productData.material_id"
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
                                                v-model="productData.origin_id"
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
                                                v-model="productData.tag_id"
                                                label="Tag"
                                                menu-props="auto"
                                                hide-details
                                                dense
                                        ></v-select>
                                    </v-col>
                                </v-row>


                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="productData.code" label="Product Code"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="productData.name" label="Product Name"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="productData.model_number" label="Product Model Number"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="productData.title" label="Product Title"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="productData.price" label="Product Price"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="productData.weight" label="Product Weight"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="6">
                                        <v-text-field type="text" v-if="authenticated" :value="userInfo.name" label="Author"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="date" v-model="productData.date" label="Date"></v-text-field>
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
                                    <v-col cols="12">
                                        <label for="">Product Description</label>
                                        <vue-editor v-model="productData.description" />
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col cols="4">
                                        <v-checkbox
                                                v-model="productData.approve"
                                                label="Approve"
                                                color="success"
                                                hide-details
                                        ></v-checkbox>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-checkbox
                                                v-model="productData.publish"
                                                label="Publish"
                                                color="primary"
                                                hide-details
                                        ></v-checkbox>
                                    </v-col>

                                    <v-col cols="4">
                                        <v-checkbox
                                                v-model="productData.feature"
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
        name: "add_product",
        title: "DashBoard - Add Product",
        components: {
            vueDropzone: vue2Dropzone,
            VueEditor: VueEditor
        },

        data(){
            return{
                productData: {
                    category_id: '',
                    sub_cat_id: '',
                    brand_id: '',
                    tag_id: '',
                    author_id: '',
                    name: '',
                    title: '',
                    model_number: '',
                    code: '',
                    description: '',
                    image: '',
                    material_id: '',
                    origin_id: '',
                    price: '',
                    weight: '',
                    feature: '',
                    approve: '',
                    publish: '',
                    date: ''
                },

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
                sub_categories: state => state.product.sub_categories,
                brands: state => state.brand.brands,
                materials: state => state.material.materials,
                origins: state => state.origin.origins,
                tags: state => state.tag.tags,
                message: state => state.product.success_message
            })
        },

        mounted(){
            this.getCategories();
            this.getBrands();
            this.getMaterials();
            this.getOrigins();
            this.getTags();
        },

        methods: {

            ...mapActions({
                getCategories: 'category/get_categories',
                getSubCategories: 'product/get_subCategories',
                getBrands: 'brand/getBrands',
                getMaterials: 'material/get_material',
                getOrigins: 'origin/get_origin',
                getTags: 'tag/get_tag'

            }),

            getSubCategory(){
                let category_id = this.productData.category_id;
                this.getSubCategories(category_id);
            },

            uploadSuccess(response) {
                this.productData.image = response;
            },

            addProducts: async function(){
                try {
                    let formData = new FormData();
                    formData.append('category_id', this.productData.category_id);
                    formData.append('sub_cat_id', this.productData.sub_cat_id);
                    formData.append('tag_id', this.productData.tag_id);
                    formData.append('brand_id', this.productData.brand_id);
                    formData.append('author_id', this.userInfo.id);
                    formData.append('name', this.productData.name);
                    formData.append('title', this.productData.title);
                    formData.append('model_number', this.productData.model_number);
                    formData.append('code', this.productData.code);
                    formData.append('description', this.productData.description);
                    formData.append('image', this.productData.image, this.productData.image.name);
                    formData.append('material_id', this.productData.material_id);
                    formData.append('origin_id', this.productData.origin_id);
                    formData.append('price', this.productData.price);
                    formData.append('weight', this.productData.weight);
                    formData.append('feature', this.productData.feature);
                    formData.append('approve', this.productData.approve);
                    formData.append('publish', this.productData.publish);
                    formData.append('date', this.productData.date);

                    await this.$store.dispatch('product/add_product', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.productData = {};

                        this.$refs.myVueDropzone.removeAllFiles();
                    });
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