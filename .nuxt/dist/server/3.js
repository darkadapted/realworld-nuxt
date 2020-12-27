exports.ids = [3];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=170e63b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-170e63b2><div class=\"container\" data-v-170e63b2><h1 class=\"logo-font\" data-v-170e63b2>conduit</h1> <p data-v-170e63b2>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-170e63b2>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-170e63b2>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-170e63b2>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-170e63b2>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-170e63b2>","</ul>",[(_vm.user!==null)?_vm._ssrNode("<li class=\"nav-item\" data-v-170e63b2>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.$route.query.tab === 'your_feed'},attrs:{"to":{
                                name: 'home',
                                query: {
                                 tab: 'your_feed'
                                }
                              },"exact":""}},[_vm._v("\n                                Your Feed\n                            ")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-170e63b2>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: (_vm.$route.query.tab || 'global_feed') === 'global_feed'},attrs:{"to":{
                                name: 'home',
                                query: {
                                 tab: 'global_feed',
                                 page: _vm.$route.query.page | 1
                                }
                              },"exact":""}},[_vm._v("\n                                Global Feed\n                            ")])],1),_vm._ssrNode(" "),(_vm.$route.query.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-170e63b2>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.$route.query.tab === 'tag'},attrs:{"to":{
                                  name: 'home',
                                  query: {
                                    tab: 'tag',
                                    page: _vm.$route.query.page | 1,
                                    tag: _vm.$route.query.tag
                                  }
                               },"exact":""}},[_vm._v("\n                                #"+_vm._s(_vm.$route.query.tag)+"\n                            ")])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(articleInfo,index){return _vm._ssrNode("<div class=\"article-preview\" data-v-170e63b2>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-170e63b2>","</div>",[_c('nuxt-link',{attrs:{"to":{
                            name: 'profile',
                            params: {
                                username: articleInfo.author.username
                            },
                            query: {
                              tab: 'my_article'
                            }
                        }}},[_c('img',{attrs:{"src":articleInfo.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-170e63b2>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                                name: 'profile',
                                params: {
                                    username: articleInfo.author.username
                                },
                                query: {
                                  tab: 'my_article'
                                }
                              }}},[_vm._v("\n                                "+_vm._s(articleInfo.author.username)+"\n                            ")]),_vm._ssrNode(" <span class=\"date\" data-v-170e63b2>"+_vm._ssrEscape(_vm._s(_vm._f("date")(articleInfo.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",articleInfo.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                             active: articleInfo.favorited
                           }))+" data-v-170e63b2><i class=\"ion-heart\" data-v-170e63b2></i>"+_vm._ssrEscape(" "+_vm._s(articleInfo.favoritesCount)+"\n                        ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                        name: 'article',
                        params: {
                            slug: articleInfo.slug
                        }
                    }}},[_c('h1',[_vm._v(_vm._s(articleInfo.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(articleInfo.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-170e63b2>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-170e63b2>","</div>",[_vm._ssrNode("<p data-v-170e63b2>Popular Tags</p> "),_vm._l((_vm.tags),function(item,index){return _vm._ssrNode("<div class=\"tag-list\" data-v-170e63b2>","</div>",[_c('nuxt-link',{staticClass:"tag-pill tag-default",attrs:{"to":{
                              name: 'home',
                              query: {
                                  page: _vm.$route.query.page | 1,
                                  tag: item,
                                  tab: 'tag'
                              }
                           }}},[_vm._v("\n                            "+_vm._s(item)+"\n                        ")])],1)})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-170e63b2>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-170e63b2>","</ul>",_vm._l((_vm.pageSize),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: (_vm.$route.query.page||1) == item}))+" data-v-170e63b2>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                            name: 'home',
                            query: {
                                page: item,
                                tag: _vm.$route.query.tag,
                                tab: _vm.$route.query.tab
                            }
                        }}},[_vm._v("\n                            "+_vm._s(item)+"\n                        ")])],1)}),0)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=170e63b2&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/tags.js
 // 获取标签

const getTags = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags',
    params
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "index",

  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page) | 1;
    const limit = 20;
    const getArticle = store.state.user && query.tab === 'your_feed' ? api_article["i" /* getYourFeedArticle */] : api_article["h" /* getGlobalArticle */];
    const [articeRes, tagsRes] = await Promise.all([getArticle({
      limit,
      offset: (page - 1) * limit,
      tag: query.tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articeRes.data;
    const {
      tags
    } = tagsRes.data;
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags
    };
  },

  computed: {
    pageSize() {
      return Math.floor(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(['user'])
  },
  watchQuery: ['page', 'tag', 'tab'],
  methods: {
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
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "170e63b2",
  "4f0e1206"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map