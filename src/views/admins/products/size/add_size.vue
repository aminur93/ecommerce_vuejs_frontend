<template>
    <div id="add_size">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Size</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Size</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addSize">

                                <v-text-field type="text" v-model="sizeData.size_name" label="Size name"></v-text-field>
                                <span v-if="errors.size_name" class="red--text">{{errors.size_name[0]}}</span>

                                <v-text-field type="text" v-model="sizeData.size_code" label="Size Code"></v-text-field>
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

    import {mapState} from 'vuex';

    export default {
        name: "add_size",
        title: "DashBoard - Add Size",
        data(){
            return{
                sizeData: {
                    size_name: '',
                    size_code: ''
                },

                errors: {}
            }
        },

        computed: {
            ...mapState({
                message: state => state.size.success_message
            })
        },

        methods: {
            addSize: async function(){
                try {
                    let formData = new FormData();
                    formData.append('size_name', this.sizeData.size_name);
                    formData.append('size_code', this.sizeData.size_code);

                    await this.$store.dispatch('size/add_size', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 2500
                        });

                        this.sizeData = {};
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