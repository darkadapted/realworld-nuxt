<template>
    <div class="settings-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>

                    <form @click.prevent="">
                        <fieldset>
                            <fieldset class="form-group">
                                <input class="form-control" type="text" v-model="userData.image" placeholder="URL of profile picture">
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" v-model="userData.username" placeholder="Your Name">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control form-control-lg" rows="8" v-model="userData.bio" placeholder="Short bio about you"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" v-model="userData.email" placeholder="Email">
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="password" v-model="userData.password" placeholder="Password">
                            </fieldset>
                            <button class="btn btn-lg btn-primary pull-xs-right" @click="updateSetting" :disabled="loading">
                                Update Settings
                            </button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { getCurrentUser, updateUser } from '@/api/setting'
    export default {
        name: "setting",
        middleware: 'auth',
        data() {
            return {
                userData: {
                    image: '',
                    username: '',
                    email: '',
                    bio: '',
                    password: null,
                },
                loading: false
            }
        },
        async asyncData() {
          const { data } = await getCurrentUser()
          const { user } = data;
          return {
              user
          }
        },
        mounted() {
            this.userData = {
                image: this.user.image,
                username: this.user.username,
                email: this.user.email,
                bio: this.user.bio
            }
        },
        methods: {
            async updateSetting() {
                this.loading = true
                await updateUser({
                    user: this.userData
                })
                this.loading = false
            }
        }
    }
</script>

<style scoped>

</style>
