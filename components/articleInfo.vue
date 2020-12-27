<template>
    <div class="article-meta">
        <nuxt-link
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
            <img :src="articleInfo.author.image" />
        </nuxt-link>
        <div class="info">
            <nuxt-link
              :to="{
                name: 'profile',
                params: {
                    username: articleInfo.author.username
                },
                query: {
                  tab: 'my_article'
                }
              }"
              class="author"
            >
                {{article.author.username}}
            </nuxt-link>
            <span class="date">{{article.createAt | date('MMM DD, YYYY')}}</span>
        </div>
        <template v-if="$route.query.isMyself !== 'true'">
            <button
               class="btn btn-sm btn-outline-secondary"
               :class="{active: articleInfo.author.following}"
               @click="handleFollow(article)"
            >
                <template v-if="!articleInfo.author.following">
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
            &nbsp;&nbsp;
            <button
               class="btn btn-sm btn-outline-primary"
               :class="{active: article.favorited}"
               @click="handleFavorite(article)"
               :disabled="article.favoriteDisabled"
            >
                <nuxt-link to="" class="ion-heart"></nuxt-link>
                &nbsp;
                Favorite Post <span class="counter">({{article.favoritesCount}})</span>
            </button>
        </template>
        <template v-if="$route.query.isMyself === 'true'">
            <button
               class="btn btn-sm btn-outline-secondary"
            >
                <template v-if="!articleInfo.author.following">
                    <nuxt-link
                       :to="{
                          name: 'editor',
                          query: {
                              slug: articleInfo.slug
                          }
                       }"
                       class="ion-edit"
                    >
                        &nbsp;
                        Editor
                    </nuxt-link>
                </template>
            </button>
            &nbsp;&nbsp;
            <button
               class="btn btn-sm btn-outline-primary"
               style="border: 1px solid #aaa"
               @click="delArticle"
               :disabled="deleteLoading"
            >
                <i class="ion-android-delete"></i>
                &nbsp;
                DELETE
            </button>
        </template>

    </div>
</template>

<script>
    import { handleFollow, cancelFollow, handleFavortie, cancelFavortie, deleteArticle } from '@/api/article'
    export default {
        name: "articleInfo",
        props: {
            article: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                articleInfo: null,
                deleteLoading: false
            }
        },
        created() {
          this.articleInfo = this.article
        },
        methods: {
           async handleFollow(article) {
                if (!article.author.following) {
                    await handleFollow({
                        username: article.author.username
                    })
                    article.author.following = true
                }else {
                    await cancelFollow({
                        username: article.author.username
                    })
                    article.author.following = false
                }
            },
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
            },
            async delArticle() {
                this.deleteLoading = true
                await deleteArticle({
                    slug: this.article.slug
                })
                this.deleteLoading = false
                this.$router.push({
                    name: 'profile',
                    params: {
                        username: this.article.author.username
                    },
                    query: {
                        isMyself: 'true',
                        tab: 'my_article'
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
