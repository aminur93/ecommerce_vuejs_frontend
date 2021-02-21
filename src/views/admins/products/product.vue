<template>
    <div id="product">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Welcome Products</h1>
                </v-col>
            </v-row>

            <v-row wrap>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>Products List</v-card-title>
                            </v-col>

                            <v-col cols="6">
                                <v-card-actions class="justify-end">
                                    <v-btn text color="success" router to="/dashboard/add_product">
                                        <v-icon small left>mdi-plus</v-icon>
                                        <span>Add New</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All Product List
                                <v-spacer></v-spacer>

                                <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                        class="mb-5"
                                ></v-text-field>
                            </v-card-title>

                            <v-data-table :headers="headers" :items="products" :search="search"  class="elevation-1">

                                <template v-slot:item.image="{item}">
                                    <span v-if="item.image != null">
                                        <img :src="showImage(item.image)" alt="" width="70px" class="mt-2">
                                    </span>

                                    <span v-else>
                                        <p>No Image</p>
                                    </span>
                                </template>

                                <template v-slot:item.feature="{item}">
                                    <v-switch :input-value="item.feature === 1 ? true : false" @click="feature(item.id)" hide-details></v-switch>
                                </template>

                                <template v-slot:item.approve="{item}">
                                    <v-switch :input-value="item.approve === 1 ? true : false" @click="approve(item.id)" hide-details></v-switch>
                                </template>

                                <template v-slot:item.publish="{item}">
                                    <v-switch :input-value="item.publish === 1 ? true : false" @click="publish(item.id)" hide-details></v-switch>
                                </template>

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/edit_product/${item.id}`">
                                                <v-icon left small>mdi-pencil</v-icon>
                                                <span right class="caption text-lowercase">Edit</span>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="deleteProduct(item.id)">
                                                <v-icon left small>mdi-delete</v-icon>
                                                <span right class="caption text-lowercase">Delete</span>
                                            </v-btn>
                                        </template>
                                        <span>Delete</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/stock/${item.id}`">
                                                <v-icon left small>mdi-stocking</v-icon>
                                                <span right class="caption text-lowercase">Stock</span>
                                            </v-btn>
                                        </template>
                                        <span>Stock</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/product_image/${item.id}`">
                                                <v-icon left small>mdi-image</v-icon>
                                                <span right class="caption text-lowercase">Image</span>
                                            </v-btn>
                                        </template>
                                        <span>Image</span>
                                    </v-tooltip>

                                </template>

                            </v-data-table>
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
        name: "product",
        title: "DashBoard - Products",
        data(){
            return{
                search: ''
            }
        },

        computed: {
            headers(){
                return [
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'Image', value:'image'},
                    {text: 'Category', value:'cat_name'},
                    {text: 'Sub-Cat', value:'sub_cat_name'},
                    {text: 'Brand', value:'brand_name'},
                    {text: 'Name', value:'name'},
                    {text: 'Origin', value:'origin_name'},
                    {text: 'Feature', value:'feature'},
                    {text: 'Approve', value:'approve'},
                    {text: 'Publish', value:'publish'},
                    {text: 'Actions', value: 'actions', align: 'center', sortable: false, width: 350},
                ]
            },

            ...mapState({
                products: state => state.product.products,
                message: state => state.product.success_message
            })
        },

        mounted(){
            this.getAllProducts()
        },

        methods: {
            ...mapActions({
                'getAllProducts': 'product/get_product'
            }),

            showImage(img){
                let server_Path = this.$store.state.serverPath;
                return server_Path + "/assets/admin/uploads/small/"+img;
            },

            feature: async function(id){
                try {

                    await this.$store.dispatch('product/feature',id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                }catch (e) {
                    this.$swal.fire({
                        icon: 'error',
                        text: 'Oops',
                        title: e.response.data.error,
                    });
                }
            },

            approve: async function(id){
                try {
                    await this.$store.dispatch('product/approve', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                }catch (e) {
                    this.$swal.fire({
                        icon: 'error',
                        text: 'Oops',
                        title: e.response.data.error,
                    });
                }
            },

            publish: async function(id){
                try {
                    await this.$store.dispatch('product/publish', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                }catch (e) {
                    this.$swal.fire({
                        icon: 'error',
                        text: 'Oops',
                        title: e.response.data.error,
                    });
                }
            },

            deleteProduct: async function(){
                //
            }
        }
    }
</script>

<style scoped>

</style>