<template>
    <div id="maincommerce" style="margin-top: 150px">

        <v-container class="my-2">

           <v-row>
               <!--Start slider content-->
               <v-col cols="12">

                   <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                       <v-carousel-item
                               v-for="(slide, i) in slides"
                               :key="i"
                       >
                           <v-sheet :color="colors[i]" height="100%">
                               <v-row class="fill-height" align="center" justify="center">
                                   <div class="display-3">
                                       {{ slide }} Slide
                                   </div>
                               </v-row>
                           </v-sheet>
                       </v-carousel-item>
                   </v-carousel>

               </v-col>
               <!--End slider content-->
           </v-row>

            <v-row>
                <!--Start Sidebar Content-->
                <v-col cols="4">

                    <v-card class="mb-5">
                        <v-card-title class="green lighten-1 white--text justify-center">Category</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text></v-card-text>
                    </v-card>

                    <v-card>
                        <v-card-title class="green lighten-1 white--text justify-center">Brand</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text></v-card-text>
                    </v-card>

                </v-col>
                <!--End Sidebar Content-->

                <!--Start Main Content-->
                <v-col cols="8">

                    <!--Products Content Start-->
                    <div>
                        <v-card style="display: inline-block;margin-right: 5px" max-width="250" class="mb-5" v-for="item in products" :key="item.id">
                            <v-img class="white--text align-end" height="200px" :src="item.image"></v-img>

                            <v-card-text class="text--primary">
                                <div>{{item.text}}</div>

                                <div>{{item.title}}</div>
                            </v-card-text>

                            <v-card-actions>

                                <v-btn color="green" text>
                                    <v-icon>mdi-cart</v-icon>
                                </v-btn>

                                <v-btn color="green" text>
                                    <v-icon>mdi-heart-box</v-icon>
                                </v-btn>

                                <v-btn color="green" text>
                                    <v-icon>mdi-page-next</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                    <!--Products Content end-->

                    <!--Start Pagination-->
                    <div class="text-center">
                        <v-pagination
                            v-model="page"
                            :length="4"
                            prev-icon="mdi-menu-left"
                            next-icon="mdi-menu-right"
                        ></v-pagination>
                    </div>
                    <!--End Pagination-->

                </v-col>
                <!--End Main Content-->
            </v-row>

        </v-container>
    </div>
</template>

<script>
    export default {
        name: "MainCommerce",
        data(){
            return{

                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],

                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],

                products: [
                    {id:'1',image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', text:'Whitehaven Beach', title: 'Whitsunday Island, Whitsunday Islands'},
                    {id:'2',image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', text:'Whitehaven Beach', title: 'Whitsunday Island, Whitsunday Islands'},
                    {id:'3',image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', text:'Whitehaven Beach', title: 'Whitsunday Island, Whitsunday Islands'},
                    {id:'4',image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', text:'Whitehaven Beach', title: 'Whitsunday Island, Whitsunday Islands'},
                    {id:'5',image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', text:'Whitehaven Beach', title: 'Whitsunday Island, Whitsunday Islands'},
                    {id:'6',image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', text:'Whitehaven Beach', title: 'Whitsunday Island, Whitsunday Islands'},
                ],

                page: 1,
            }
        },
    }
</script>

<style scoped>

</style>