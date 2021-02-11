<template>
    <div id="size">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Welcome Size</h1>
                </v-col>
            </v-row>

            <v-row wrap>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>Size List</v-card-title>
                            </v-col>

                            <v-col cols="6">
                                <v-card-actions class="justify-end">
                                    <v-btn text color="success" router to="/dashboard/add_size">
                                        <v-icon small left>mdi-plus</v-icon>
                                        <span>Add New</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All Size List
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

                            <v-data-table :headers="headers" :items="sizes" :search="search"  class="elevation-1">

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/edit_size/${item.id}`">
                                                <v-icon left small>mdi-pencil</v-icon>
                                                <span right class="caption text-lowercase">Edit</span>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="deleteSize(item.id)">
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
        name: "size",
        title: "DashBoard - Size",
        data(){
            return{
                search: '',
            }
        },

        computed: {
            headers(){
                return [
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'Size Name', value:'size_name'},
                    {text: 'Size Code', value:'size_code'},
                    {text: 'Actions', value: 'actions', align: 'center', sortable: false },
                ]
            },

            ...mapState({
                sizes: state => state.size.sizes,
                message: state => state.size.success_message
            })
        },

        mounted(){
            this.getAllSizes();
        },

        methods: {
            ...mapActions({
                'getAllSizes': 'size/get_size'
            }),

            deleteSize: async function(id)
            {
                try {
                    await this.$store.dispatch('size/delete_size', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 2500
                        });

                        this.getAllSizes();
                    })
                }catch (e) {
                    this.$swal.fire({
                        icon: 'error',
                        text: 'Oops',
                        title: e.response.data.error,
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>