<template>
    <div id="edit_tag">
        <v-container class="my-5">

            <v-row wrap>
                <v-col cols="6">
                    <h1 class="subtitle-1 grey--text">Edit Tag</h1>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Tag</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateTag">
                                <v-text-field type="text" v-model="editTag.tag_name" label="Tag name"></v-text-field>
                                <span v-if="errors.tag_name" class="red--text">{{errors.tag_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/tag">Back</v-btn>
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
        name: "edit_tag",
        title: "DashBoard - Edit Tag",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editTag: state => state.tag.tag,
                message: state => state.tag.success_message
            })
        },

        mounted(){
            this.getEditTag(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                'getEditTag': 'tag/edit_tag'
            }),

            updateTag: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('tag_name', this.editTag.tag_name);

                    await this.$store.dispatch('tag/update_tag', {id:id, data:formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                    })
                }catch (error) {
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        default:
                            this.$swal.fire({
                                icon: 'error',
                                text: 'Oops',
                                title: error.response.data.error,
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