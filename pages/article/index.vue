<template>
    <div class="article-page">

        <div class="banner">
            <div class="container">

                <h1>{{article.title}}</h1>

                <Article :article="article"></Article>

            </div>
        </div>

        <div class="container page">

            <div class="row article-content">
                <div class="col-md-12" v-html="article.body" />
            </div>

            <hr />

            <div class="article-actions">
                <Article :article="article"></Article>
            </div>

            <ArticleComment></ArticleComment>
        </div>

    </div>
</template>

<script>
    import { getArticleDetail } from '@/api/article.js'
    import Markdown from 'markdown-it'
    import Article from '@/components/articleInfo';
    import ArticleComment from '@/components/articleComment';

    export default {
        name: "article",
        head() {
            return {
                title: `${this.article.title} - RealWorld`,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.article.description
                    }
                ]
            }
        },
        async asyncData({params}) {
            const articleDetail = await getArticleDetail({slug: params.slug})
            const { article } = articleDetail.data;
            const md = new Markdown()
            article.body = md.render(article.body)
            article.favoriteDisabled = false
            return {
                article,
            }
        },
        components: {
            Article,
            ArticleComment
        }
    }
</script>

<style scoped>

</style>
