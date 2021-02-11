<template>
    <div id="add-color">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Add Color</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Color</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addColor">

                                <v-text-field type="text" v-model="colorData.color_name" label="Color name"></v-text-field>
                                <span v-if="errors.color_name" class="red--text">{{errors.color_name[0]}}</span>

                                <v-text-field type="text" v-model="colorData.color_code" label="Color Code"></v-text-field>
                                <span v-if="errors.color_code" class="red--text">{{errors.color_code[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/color">Back</v-btn>
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
        name: "add_color",
        title: "DashBoard - Add Color",
        data(){
            return{
                colorData: {
                    color_name: '',
                    color_code: ''
                },

                errors: {}
            }
        },

        computed: {
            ...mapState({
                message: state => state.color.success_message
            })
        },

        methods: {
            addColor: async function(){
                try {
                    let formData = new FormData();
                    formData.append('color_name', this.colorData.color_name);
                    formData.append('color_code', this.colorData.color_code);

                    await this.$store.dispatch('color/add_color', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.colorData = {};
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