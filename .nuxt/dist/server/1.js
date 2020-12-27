exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getGlobalArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getYourFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return handleFavortie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cancelFavortie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return handleFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cancelFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return queryComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updataArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);

 // 获取公共的文章列表

const getGlobalArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取your_feed的文章列表

const getYourFeedArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 点赞

const handleFavortie = query => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${query.article.slug}/favorite`
  });
}; // 取消点赞

const cancelFavortie = query => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${query.article.slug}/favorite`
  });
}; // 获取文章详情

const getArticleDetail = query => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${query.slug}`
  });
}; // 关注

const handleFollow = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${params.username}/follow`
  });
}; // 取消关注

const cancelFollow = query => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${query.username}/follow`
  });
}; // 发布评论

const addComment = query => {
  const {
    slug,
    data
  } = query;
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 查询评论

const queryComment = query => {
  const {
    slug
  } = query;
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 新建 article

const createArticle = params => {
  const {
    data
  } = params;
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data
  });
}; // 删除 article

const deleteArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${data.slug}`
  });
}; // 更新 article

const updataArticle = params => {
  const {
    slug,
    data
  } = params;
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
}; // 获取 article

const getArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${data.slug}`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};
const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=f80905ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-f80905ac>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-f80905ac>","</div>",[_vm._ssrNode("<h1 data-v-f80905ac>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('Article',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-f80905ac>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-f80905ac><div class=\"col-md-12\" data-v-f80905ac>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-f80905ac> "),_vm._ssrNode("<div class=\"article-actions\" data-v-f80905ac>","</div>",[_c('Article',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_c('ArticleComment')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=f80905ac&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/articleInfo.vue?vue&type=template&id=378db818&scoped=true&
var articleInfovue_type_template_id_378db818_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
         name: 'profile',
         params: {
           username: _vm.articleInfo.author.username
         },
         query: {
           tab: 'my_article'
         }
       }}},[_c('img',{attrs:{"src":_vm.articleInfo.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-378db818>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
            name: 'profile',
            params: {
                username: _vm.articleInfo.author.username
            },
            query: {
              tab: 'my_article'
            }
          }}},[_vm._v("\n            "+_vm._s(_vm.article.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date\" data-v-378db818>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.$route.query.isMyself !== 'true')?[_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.articleInfo.author.following}))+" data-v-378db818>"+((!_vm.articleInfo.author.following)?("<i class=\"ion-plus-round\" data-v-378db818></i>\n                 \n                Follow Eric Simons\n            "):("<i class=\"ion-minus-round\" data-v-378db818></i>\n                 \n                Unfollow\n            "))+"</button>\n          \n        "),_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+" data-v-378db818>","</button>",[_c('nuxt-link',{staticClass:"ion-heart",attrs:{"to":""}}),_vm._ssrNode("\n             \n            Favorite Post <span class=\"counter\" data-v-378db818>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span>")],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.$route.query.isMyself === 'true')?[_vm._ssrNode("<button class=\"btn btn-sm btn-outline-secondary\" data-v-378db818>","</button>",[(!_vm.articleInfo.author.following)?[_c('nuxt-link',{staticClass:"ion-edit",attrs:{"to":{
                      name: 'editor',
                      query: {
                          slug: _vm.articleInfo.slug
                      }
                   }}},[_vm._v("\n                     \n                    Editor\n                ")])]:_vm._e()],2),_vm._ssrNode("\n          \n        <button"+(_vm._ssrAttr("disabled",_vm.deleteLoading))+" class=\"btn btn-sm btn-outline-primary\" style=\"border: 1px solid #aaa\" data-v-378db818><i class=\"ion-android-delete\" data-v-378db818></i>\n             \n            DELETE\n        </button>")]:_vm._e()],2)}
var articleInfovue_type_template_id_378db818_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/articleInfo.vue?vue&type=template&id=378db818&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/articleInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var articleInfovue_type_script_lang_js_ = ({
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
    };
  },

  created() {
    this.articleInfo = this.article;
  },

  methods: {
    async handleFollow(article) {
      if (!article.author.following) {
        await Object(api_article["k" /* handleFollow */])({
          username: article.author.username
        });
        article.author.following = true;
      } else {
        await Object(api_article["c" /* cancelFollow */])({
          username: article.author.username
        });
        article.author.following = false;
      }
    },

    async handleFavorite(article) {
      article.favoriteDisabled = true;

      if (!article.favorited) {
        await Object(api_article["j" /* handleFavortie */])({
          article
        });
        article.favorited = true;
        article.favoritesCount += 1;
      } else {
        await Object(api_article["b" /* cancelFavortie */])({
          article
        });
        article.favorited = false;
        article.favoritesCount -= 1;
      }

      article.favoriteDisabled = false;
    },

    async delArticle() {
      this.deleteLoading = true;
      await Object(api_article["e" /* deleteArticle */])({
        slug: this.article.slug
      });
      this.deleteLoading = false;
      this.$router.push({
        name: 'profile',
        params: {
          username: this.article.author.username
        },
        query: {
          isMyself: 'true',
          tab: 'my_article'
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/articleInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleInfovue_type_script_lang_js_ = (articleInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/articleInfo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articleInfovue_type_script_lang_js_,
  articleInfovue_type_template_id_378db818_scoped_true_render,
  articleInfovue_type_template_id_378db818_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "378db818",
  "6e46de78"
  
)

/* harmony default export */ var articleInfo = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/articleComment.vue?vue&type=template&id=7fe5c226&scoped=true&
var articleCommentvue_type_template_id_7fe5c226_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-7fe5c226>","</div>",[_vm._ssrNode("<form class=\"card comment-form\" data-v-7fe5c226><div class=\"card-block\" data-v-7fe5c226><textarea"+(_vm._ssrAttr("disabled",_vm.loading))+" required=\"required\" placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-7fe5c226>"+_vm._ssrEscape(_vm._s(_vm.comment))+"</textarea></div> <div class=\"card-footer\" data-v-7fe5c226><img"+(_vm._ssrAttr("src",this.$store.state.user.image))+" class=\"comment-author-img\" data-v-7fe5c226> <button class=\"btn btn-sm btn-primary\" data-v-7fe5c226>\n                    Post Comment\n                </button></div></form> "),_vm._l((_vm.articleComment),function(comment,index){return _vm._ssrNode("<div class=\"card\" data-v-7fe5c226>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-7fe5c226><p class=\"card-text\" data-v-7fe5c226>"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-7fe5c226>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                        name: 'profile',
                        params: {
                            username: comment.author.username
                        },
                        query: {
                            tab: 'my_article'
                        }
                    }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n                 \n                "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                        name: 'profile',
                        params: {
                            username: comment.author.username
                        },
                        query: {
                          tab: 'my_article'
                        }
                    }}},[_vm._v("\n                    "+_vm._s(comment.author.username)+"\n                ")]),_vm._ssrNode(" <span class=\"date-posted\" data-v-7fe5c226>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span>")],2)],2)})],2)])}
var articleCommentvue_type_template_id_7fe5c226_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/articleComment.vue?vue&type=template&id=7fe5c226&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/articleComment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var articleCommentvue_type_script_lang_js_ = ({
  name: "articleComment",

  data() {
    return {
      articleComment: [],
      comment: '',
      loading: false
    };
  },

  mounted() {
    this.getComment();
  },

  methods: {
    async addComment() {
      this.loading = true;
      await Object(api_article["a" /* addComment */])({
        data: {
          comment: {
            body: this.comment
          }
        },
        slug: this.$route.params.slug
      });
      this.loading = false;
      this.getComment(); // console.log('this.$router', this.$route.params.slug)
    },

    async getComment() {
      const {
        data
      } = await Object(api_article["l" /* queryComment */])({
        slug: this.$route.params.slug
      });
      this.articleComment = data.comments;
    }

  }
});
// CONCATENATED MODULE: ./components/articleComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleCommentvue_type_script_lang_js_ = (articleCommentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/articleComment.vue



function articleComment_injectStyles (context) {
  
  
}

/* normalize component */

var articleComment_component = Object(componentNormalizer["a" /* default */])(
  components_articleCommentvue_type_script_lang_js_,
  articleCommentvue_type_template_id_7fe5c226_scoped_true_render,
  articleCommentvue_type_template_id_7fe5c226_scoped_true_staticRenderFns,
  false,
  articleComment_injectStyles,
  "7fe5c226",
  "ffb1bf8e"
  
)

/* harmony default export */ var articleComment = (articleComment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "article",

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  async asyncData({
    params
  }) {
    const articleDetail = await Object(api_article["g" /* getArticleDetail */])({
      slug: params.slug
    });
    const {
      article
    } = articleDetail.data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    article.favoriteDisabled = false;
    return {
      article
    };
  },

  components: {
    Article: articleInfo,
    ArticleComment: articleComment
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "f80905ac",
  "2b45b445"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map