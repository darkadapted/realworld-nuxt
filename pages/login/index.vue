<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">
                        {{!isLogin ? 'Register' : 'Sign up'}}
                    </h1>
                    <p class="text-xs-center">
                        <nuxt-link :to="{path: '/register'}" v-if="isLogin">Need an account?</nuxt-link>
                        <nuxt-link :to="{path: '/login'}" v-else>Have an account?</nuxt-link>
                    </p>

                    <ul class="error-messages">
                        <template v-for="(message, field) in error">
                            <li v-for="(err, index) in message" :key="index">{{field}} {{err}}</li>
                        </template>
                    </ul>

                    <form @submit.prevent="onsubmit">
                        <fieldset class="form-group" v-if="!isLogin">
                            <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="email" v-model="user.email" placeholder="Email" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="password" minlength="8" v-model="user.password" placeholder="Password" required>
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            {{!isLogin ? 'Sign up':'Sign In'}}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { login, register } from '@/api/login'
    const Cookie = process.client ? require('js-cookie') : null
    export default {
        name: "index",
        middleware: 'noAuth',
        data() {
          return {
              user: {
                  username: '',
                  email: '',
                  password: ''
              },
              error: []
          }
        },
        computed: {
            isLogin() {
                // this.user = {
                //     username: '',
                //     email: '123321123@163.com',
                //     password: '12345678'
                // };
                return this.$route.name === 'login'
            }
        },
        methods: {
           loginOrRegister(){
               return this.isLogin ? login({
                   user: this.user
               }): register({
                   user: this.user
               })
           },
           async onsubmit() {
                if (this.isLogin) {
                    delete this.user.username
                }
                try {
                   const { data } = await this.loginOrRegister()
                   this.$store.commit('setUser', data.user)
                   Cookie.set('auth', data.user)
                   this.$router.push('/')
                }catch (err) {
                    this.error = err.response.data.errors;
                }
            }
        }
    }
</script>

<style scoped>

</style>
