<template>
    <div class="profile-page">

        <div class="user-info">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 col-md-10 offset-md-1">
                        <img :src="profile.image" class="user-img" />
                        <h4>{{profile.username}}</h4>
                        <p>
                            {{profile.bio}}
                        </p>
                        <button class="btn btn-sm btn-outline-secondary action-btn" v-if="$route.query.isMyself !== 'true'">
                            <template v-if="!profile.following">
                                <i class="ion-plus-round"></i>
                                &nbsp;
                                Follow Eric Simons
                            </template>
                            <template v-else>
                                <i class="ion-minus-round"></i>
                                &nbsp;
                                Unfollow
                            </template>
                        </button>
                        <button class="btn btn-sm btn-outline-secondary action-btn" v-else>
                            <nuxt-link :to="{name: 'setting'}" style="color: #aaa">
                                <i class="ion-gear-a"></i> Edit Profile Settings
                            </nuxt-link>
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">

                <div class="col-xs-12 col-md-10 offset-md-1">
                    <div class="articles-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <nuxt-link
                                  :to="{
                                    name: 'profile',
                                    query: {
                                        isMyself: $route.query.isMyself,
                                        tab: 'my_article'
                                    }
                                  }"
                                  exact
                                  class="nav-link"
                                  :class="{article: tab === 'my_article'}"
                                >
                                    My Articles
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                   class="nav-link"
                                   :to="{
                                     name: 'profile',
                                     query: {
                                       isMyself: $route.query.isMyself,
                                       tab: 'favorite_article'
                                     }
                                   }"
                                   exact
                                   :class="{article: tab === 'favorite_article'}"
                                >
                                    Favorited Articles
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="article-preview" v-for="(articleInfo, index) in articles" :key="index">
                        <div class="article-meta">
                            <nuxt-link :to="{
                                name: 'profile',
                                params: {
                                    username: articleInfo.author.username
                                },
                                query: {
                                  tab: 'my_article'
                                }
                            }">
                                <img :src="articleInfo.author.image" />
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link
                                        class="author"
                                        :to="{
                                    name: 'profile',
                                    params: {
                                        username: articleInfo.author.username
                                    },
                                    query: {
                                      tab: 'my_article'
                                    }
                                  }"
                                >
                                    {{articleInfo.author.username}}
                                </nuxt-link>
                                <span class="date">{{articleInfo.createdAt | date('MMM DD, YYYY')}}</span>
                            </div>
                            <button
                               class="btn btn-outline-primary btn-sm pull-xs-right"
                               :class="{
                                 active: articleInfo.favorited
                               }"
                               @click="handleFavorite(articleInfo)"
                               :disabled="articleInfo.favoriteDisabled"
                            >
                                <i class="ion-heart"></i> {{articleInfo.favoritesCount}}
                            </button>
                        </div>
                        <nuxt-link :to="{
                            name: 'article',
                            params: {
                                slug: articleInfo.slug
                            }
                        }" class="preview-link">
                            <h1>{{articleInfo.title}}</h1>
                            <p>{{articleInfo.description}}</p>
                            <span>Read more...</span>
                        </nuxt-link>
                    </div>

                </div>
<!--                <nav>-->
<!--                    <ul class="pagination">-->
<!--                        <li class="page-item" :class="{active: ($route.query.page||1) == item}" v-for="item in pageSize" :key="item">-->
<!--                            <nuxt-link class="page-link" :to="{-->
<!--                                name: 'home',-->
<!--                                query: {-->
<!--                                    page: item,-->
<!--                                }-->
<!--                            }">-->
<!--                                {{item}}-->
<!--                            </nuxt-link>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </nav>-->

            </div>
        </div>

    </div>
</template>

<script>
    import { getUserDetail } from '@/api/profile'
    import { getGlobalArticle, handleFavortie, cancelFavortie } from '@/api/article'
    export default {
        name: "profile",
        middleware: 'auth',
        async asyncData({params, query}) {
           const tab = query.tab || 'my_article'
           const currentUser = await getUserDetail({
                username: params.username
           })
           const { profile } = currentUser.data;
           const queryArticleData = tab === 'my_article' ? { author: profile.username }: {favorited: profile.username}
           const myArticle = await getGlobalArticle({
               ...queryArticleData
           })
           const { articles, articlesCount } = myArticle.data;
           articles.forEach(article => article.favoriteDisabled = false)
           return {
             profile,
             tab,
             articles,
             articlesCount
           }
        },
        watchQuery: ['tab'],
        methods: {
            async handleFavorite(article) {
                article.favoriteDisabled = true
                await cancelFavortie({article})
                article.favorited = false
                article.favoritesCount -= 1
                article.favoriteDisabled = false
            }
        }
    }
</script>

<style scoped>

</style>
