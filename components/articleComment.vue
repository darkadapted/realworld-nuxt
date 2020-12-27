<template>
    <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

            <form class="card comment-form" @click.prevent="">
                <div class="card-block">
                    <textarea :disabled="loading" required class="form-control" placeholder="Write a comment..." rows="3" v-model="comment"></textarea>
                </div>
                <div class="card-footer">
                    <img :src="this.$store.state.user.image" class="comment-author-img" />
                    <button class="btn btn-sm btn-primary" @click="addComment">
                        Post Comment
                    </button>
                </div>
            </form>
            <div class="card" v-for="(comment, index) in articleComment" :key="index">
                <div class="card-block">
                    <p class="card-text">{{comment.body}}</p>
                </div>
                <div class="card-footer">
                    <nuxt-link
                        :to="{
                            name: 'profile',
                            params: {
                                username: comment.author.username
                            },
                            query: {
                                tab: 'my_article'
                            }
                        }"
                        class="comment-author"
                    >
                        <img :src="comment.author.image" class="comment-author-img" />
                    </nuxt-link>
                    &nbsp;
                    <nuxt-link
                        :to="{
                            name: 'profile',
                            params: {
                                username: comment.author.username
                            },
                            query: {
                              tab: 'my_article'
                            }
                        }"
                        class="comment-author"
                    >
                        {{comment.author.username}}
                    </nuxt-link>
                    <span class="date-posted">{{comment.createdAt | date('MMM DD, YYYY')}}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { addComment, queryComment } from '@/api/article.js'
    export default {
        name: "articleComment",
        data() {
            return {
                articleComment: [],
                comment: '',
                loading: false
            }
        },
        mounted() {
            this.getComment()
        },
        methods: {
            async addComment() {
                this.loading = true
                await addComment({
                    data: {
                        comment: {
                            body: this.comment,
                        }
                    },
                    slug: this.$route.params.slug
                })
                this.loading = false
                this.getComment()
                // console.log('this.$router', this.$route.params.slug)
            },
            async getComment() {
                const { data } = await queryComment({slug: this.$route.params.slug})
                this.articleComment = data.comments
            }
        }
    }
</script>

<style scoped>

</style>
