<template>
    <div id="product_image">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Welcome Product Image</h1>
                </v-col>
            </v-row>

            <v-row wrap>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>Product Image List</v-card-title>
                            </v-col>

                            <v-col cols="6">
                                <v-card-actions class="justify-end">
                                    <v-btn text color="primary" router to="/dashboard/product/">
                                        <v-icon small left> mdi-arrow-left-drop-circle-outline</v-icon>
                                        <span>Back To product</span>
                                    </v-btn>

                                    <v-btn text color="success" router :to="`/dashboard/add_product_image/${this.$route.params.id}`">
                                        <v-icon small left>mdi-plus</v-icon>
                                        <span>Add New</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All Product Image List
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

                            <v-data-table :headers="headers" :items="productImages" :search="search" show-select  :single-select="singleSelect"  class="elevation-1">

                                <template v-slot:top>

                                    <v-row>
                                        <v-col cols="2">
                                            <v-switch
                                                    v-model="singleSelect"
                                                    label="Single select"
                                                    class="pa-3"
                                            ></v-switch>
                                        </v-col>

                                        <v-col cols="2">
                                            <v-btn text x-small elevation="2" color="primary" class="mt-7" v-on:click="deleteAllImage()">
                                                <v-icon left small>mdi-delete</v-icon>
                                                <span class="text-lowercase">Delete all images</span>
                                            </v-btn>
                                        </v-col>
                                    </v-row>




                                </template>

                                <template v-slot:item.image="{item}">
                                    <span v-if="item.image != null">
                                        <img :src="showImage(item.image)" alt="" width="70px" class="mt-2">
                                    </span>

                                    <span v-else>
                                        <p>No Image</p>
                                    </span>
                                </template>

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/edit_color/${item.id}`">
                                                <v-icon left small>mdi-pencil</v-icon>
                                                <span right class="caption text-lowercase">Edit</span>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="deleteProductImage(item.id)">
                                                <v-icon left small>mdi-delete</v-icon>
                                                <span right class="caption text-lowercase">Delete</span>
                                            </v-btn>
                                        </template>
                                        <span>Delete</span>
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
        name: "ProductImage",
        title: "Dashboard - Product Image",
        data(){
            return{
                search: '',
                singleSelect: false,
                selected: [],
            }
        },

        computed: {
            headers(){
                return [
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'Image', value:'image', sortable: false},
                    {text: 'Product Name', value:'name'},
                    {text: 'Actions', value: 'actions', align: 'center', sortable: false },
                ]
            },

            ...mapState({
                productImages: state => state.product.product_images,
                message: state => state.product.success_message
            })
        },

        mounted(){
            this.getProductImages(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                getProductImages: 'product/get_product_image',
            }),

            showImage(img){
                let server_Path = this.$store.state.serverPath;
                return server_Path + "/assets/admin/uploads/small/"+img;
            },
        },
    }
</script>

<style scoped>

</style>