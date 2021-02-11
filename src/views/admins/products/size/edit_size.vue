<template>
    <div id="edit_size">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Size</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Size</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateSize">

                                <v-text-field type="text" v-model="editSizeData.size_name" label="Size name"></v-text-field>
                                <span v-if="errors.size_name" class="red--text">{{errors.size_name[0]}}</span>

                                <v-text-field type="text" v-model="editSizeData.size_code" label="Size Code"></v-text-field>
                                <span v-if="errors.size_code" class="red--text">{{errors.size_code[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/size">Back</v-btn>
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
        name: "edit_size",
        title: "DashBoard - Edit Size",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editSizeData: state => state.size.size,
                message: state => state.size.success_message
            })
        },

        mounted(){
            this.getEditSize(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                'getEditSize': 'size/edit_size'
            }),

            updateSize: async function(){
                try {
                    let id = this.$route.params.id;

                    let formData = new FormData();
                    formData.append('size_name', this.editSizeData.size_name);
                    formData.append('size_code', this.editSizeData.size_code);

                    await this.$store.dispatch('size/update_size', {id:id, data:formData}).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 2500
                        });

                        this.getEditSize(id);
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

</style>