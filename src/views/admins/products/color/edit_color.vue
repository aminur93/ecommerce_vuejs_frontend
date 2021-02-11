<template>
    <div id="edit_color">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Color</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Color</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateColor">

                                <v-text-field type="text" v-model="EditColorData.color_name" label="Color name"></v-text-field>
                                <span v-if="errors.color_name" class="red--text">{{errors.color_name[0]}}</span>

                                <v-text-field type="text" v-model="EditColorData.color_code" label="Color Code"></v-text-field>
                                <span v-if="errors.color_code" class="red--text">{{errors.color_code[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/color">Back</v-btn>
                                    <v-btn text type="submit" class="success mr-2">Edit</v-btn>
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
        name: "edit_color",
        title: "DashBoard - Edit Color",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                EditColorData: state => state.color.color,
                message: state => state.color.success_message
            })
        },

        mounted(){
            this.getEditColorData(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                'getEditColorData': 'color/edit_color'
            }),

            updateColor: async function(){
                try {

                    let id = this.$route.params.id;

                    let formData = new FormData();
                    formData.append('color_name', this.EditColorData.color_name);
                    formData.append('color_code', this.EditColorData.color_code);

                    await this.$store.dispatch('color/update_color', {id:id, data:formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.getEditColorData(id);
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