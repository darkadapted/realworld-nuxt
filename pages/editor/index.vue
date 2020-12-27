<template>
    <div class="editor-page">
        <div class="container page">
            <div class="row">
                <ul class="error-messages">
                    <template v-for="(message, field) in error">
                        <li v-for="(err, index) in message" :key="index">{{field}} {{err}}</li>
                    </template>
                </ul>
                <div class="col-md-10 offset-md-1 col-xs-12">
                    <form @click.prevent="">
                        <fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control form-control-lg" v-model="article.title" placeholder="Article Title">
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control" v-model="article.description" placeholder="What's this article about?">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control" rows="8" v-model="article.body" placeholder="Write your article (in markdown)"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="text" class="form-control" v-model="article.tags" placeholder="Enter tags"><div class="tag-list"></div>
                            </fieldset>
                            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="createOrEdit">
                                Publish Article
                            </button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { createArticle, getArticle, updataArticle } from '@/api/article'
    export default {
        name: "editor",
        middleware: 'auth',
        data() {
            return {
                article: {
                    title: '',
                    description: '',
                    body: '',
                    tags: ''
                },
                error: []
            }
        },
        created() {
            if (this.$route.query.slug) {
                this.query();
            }
        },
        methods: {
            async query() {
              const { data } = await getArticle({
                  slug: this.$route.query.slug
              })
              this.article = {
                  title: data.article.title,
                  description: data.article.description,
                  body: data.article.body,
                  tags: data.article.tags
              }
            },
            async createOrEdit() {
                const addOrEdit = this.$route.query.slug ? updataArticle : createArticle
                try {
                   const { data } =  await addOrEdit({
                        data: {
                            article: this.article
                        },
                        slug: this.$route.query.slug
                    })
                    const { article } = data;
                    this.$router.push({
                        name: 'article',
                        params: {
                            slug: article.slug
                        },
                        query: {
                            isMyself: 'true'
                        }
                    })
                }catch (err) {
                    this.error = err.response.data.errors;
                }
            }
        }
    }
</script>

<style scoped>

</style>
