<template>
    <nav>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click.stop="mini = !mini"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">E</span>
                <span>Commerce</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!--Start DropDown Menu-->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text color="grey" v-on="on">
                        <v-icon left>mdi-menu-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>

                <v-list flat>
                    <v-list-item v-for="link in others" :key="link.text" router :to="link.route" exact>
                        <v-list-item-title>
                            <v-icon>{{ link.icon}}</v-icon>
                            <span class="subtitle-2">{{ link.text}}</span>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!--end DropDown Menu-->

            <v-btn text color="grey" v-on:click="logout">
                <span>Sign out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app :mini-variant.sync="mini" permanent>

            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title v-if="authenticated">{{ userInfo.name }}</v-list-item-title>

                <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>


            <v-list>

                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">

                    <v-list-item-action>
                        <v-icon class="font-weight-bold">{{ link.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold" style="font-size: 12px">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>

                <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>

                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-bold" v-text="item.title" style="font-size: 12px"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="child in item.items" :key="child.title" router :to="child.route" exact style="margin-left: -20px">

                        <v-list-item-action>
                            <v-icon class="font-weight-bold" style="font-size: 20px">{{ child.icon }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title class="font-weight-bold" v-text="child.title" style="font-size: 12px"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list-group>
            </v-list>

        </v-navigation-drawer>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Navbar",
        data () {
            return {
                drawer: true,
                mini: true,
                items: [
                    {
                        action: 'mdi-clipboard-list',
                        items: [{ icon: 'mdi-format-list-bulleted ', title: 'Category',route:'/dashboard/category' }],
                        title: 'Category',
                    },

                    {
                        action: 'mdi-account-cog',
                        items: [
                            { icon: 'mdi-account', title: 'users', route:'/dashboard/user'},
                            { icon: 'mdi-alpha-r-box', title: 'Roles',route:'/dashboard/roles' },
                            { icon: 'mdi-alpha-p-box', title: 'Permissions' ,route:'/dashboard/permissions'},
                        ],
                        title: 'User Management',
                    },
                ],

                links: [
                    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/dashboard' }
                ],

                others:[
                    { icon: ' mdi-face-profile', text: 'Profile', route: '/dashboard/Profile' },
                    { icon: ' mdi-shield-key', text: 'change Password', route: '/dashboard/change_password' },
                ],

            }
        },

        computed: {
            ...mapGetters({
                authenticated: 'authenticated',
                userInfo: 'userInfo',
            })
        },

        methods: {
            logout: async function(){

                try {
                    await this.$store.dispatch('logout').then(() => {
                        this.$router.push({ path: '/login' });
                    });

                }catch (e) {
                    console.log(e);
                }

            },
        },
    }
</script>

<style scoped>
    .v-menu__content.theme--light{
        left: 990px !important;
    }
</style>