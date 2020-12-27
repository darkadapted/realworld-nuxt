<template>
    <div class="home-page">
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div class="container page">
            <div class="row">

                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item" v-if="user!==null">
                                <nuxt-link
                                  class="nav-link"
                                  :to="{
                                    name: 'home',
                                    query: {
                                     tab: 'your_feed'
                                    }
                                  }"
                                  :class="{active: $route.query.tab === 'your_feed'}"
                                  exact
                                >
                                    Your Feed
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                  class="nav-link"
                                  :to="{
                                    name: 'home',
                                    query: {
                                     tab: 'global_feed',
                                     page: $route.query.page | 1
                                    }
                                  }"
                                  :class="{active: ($route.query.tab || 'global_feed') === 'global_feed'}"
                                  exact
                                >
                                    Global Feed
                                </nuxt-link>
                            </li>
                            <li class="nav-item" v-if="$route.query.tag">
                                <nuxt-link
                                   class="nav-link"
                                   :to="{
                                      name: 'home',
                                      query: {
                                        tab: 'tag',
                                        page: $route.query.page | 1,
                                        tag: $route.query.tag
                                      }
                                   }"
                                   :class="{active: $route.query.tab === 'tag'}"
                                   exact
                                >
                                    #{{$route.query.tag}}
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

                <div class="col-md-3">
                    <div class="sidebar">
                        <p>Popular Tags</p>

                        <div class="tag-list" v-for="(item, index) in tags" :key="index">
                            <nuxt-link
                               :to="{
                                  name: 'home',
                                  query: {
                                      page: $route.query.page | 1,
                                      tag: item,
                                      tab: 'tag'
                                  }
                               }"
                               class="tag-pill tag-default"
                            >
                                {{item}}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul class="pagination">
                        <li class="page-item" :class="{active: ($route.query.page||1) == item}" v-for="item in pageSize" :key="item">
                            <nuxt-link class="page-link" :to="{
                                name: 'home',
                                query: {
                                    page: item,
                                    tag: $route.query.tag,
                                    tab: $route.query.tab
                                }
                            }">
                                {{item}}
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
</template>

<script>
    import { getGlobalArticle, getYourFeedArticle, handleFavortie, cancelFavortie } from '@/api/article'
    import { getTags } from '@/api/tags'
    import { mapState } from 'vuex'
    export default {
        name: "index",
        async asyncData({query,store}) {
            const page = Number.parseInt(query.page) | 1
            const limit = 20
            const getArticle = store.state.user && query.tab === 'your_feed' ? getYourFeedArticle : getGlobalArticle;
            const [articeRes, tagsRes] = await Promise.all(
                [
                    getArticle({
                        limit,
                        offset: (page - 1) * limit,
                        tag: query.tag
                    }),
                    getTags()
                ]
            )
            const { articles, articlesCount } = articeRes.data;
            const { tags } = tagsRes.data;
            articles.forEach(article => article.favoriteDisabled = false)
            return {
                articles,
                articlesCount,
                limit,
                page,
                tags
            }
        },
        computed: {
            pageSize() {
               return Math.floor(this.articlesCount/this.limit)
            },
            ...mapState(['user'])
        },
        watchQuery: ['page', 'tag', 'tab'],
        methods: {
            async handleFavorite(article) {
                article.favoriteDisabled = true
                if (!article.favorited) {
                    await handleFavortie({article})
                    article.favorited = true
                    article.favoritesCount += 1
                }else {
                    await cancelFavortie({article})
                    article.favorited = false
                    article.favoritesCount -= 1
                }
                article.favoriteDisabled = false
            }
        }
    }
</script>

<style scoped>

</style>
