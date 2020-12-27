<template>
    <div>
        <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">conduit</a>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <nuxt-link class="nav-link" :class="{active: $route.path === '/'}" to="/" exact>Home</nuxt-link>
                    </li>
                    <template v-if="user">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/editor">
                                <i class="ion-compose"/>&nbsp;New Post
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/setting">
                                <i class="ion-gear-a"></i>&nbsp;Settings
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link
                               :to="{
                                  name: 'profile',
                                  params: {
                                      username: user.username
                                  },
                                  query: {
                                      isMyself: 'true',
                                      tab: 'my_article'
                                  }
                               }"
                               class="nav-link"
                            >
                                <img :src="user.image" class="user-pic">
                                {{user.username}}
                            </nuxt-link>
                        </li>
                        <li class="nav-item" @click="logOut">
                            <nuxt-link
                               class="nav-link"
                               to="/"
                            >
                                <i class="ion-log-ou"></i>&nbsp;log out
                            </nuxt-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <nuxt-link
                                    class="nav-link"
                                    to="/login"
                            >
                                Sign in
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link
                                    class="nav-link"
                                    to="/register"
                            >
                                Sign up
                            </nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
        <nuxt-child />
        <footer>
            <div class="container">
                <nuxt-link
                   class="logo-font"
                   to="/"
                >
                    Sign up
                </nuxt-link>
<!--                <a href="/" class="logo-font">conduit</a>-->
                <span class="attribution">
                    An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    const Cookie = process.client ? require('js-cookie') : null
    export default {
        name: "LayoutIndex",
        computed: {
            ...mapState(['user']),
        },
        methods: {
            logOut() {
                this.$store.commit('setUser', null)
                Cookie.set('auth', null)
            }
        }
    }
</script>

<style scoped>

</style>
