exports.ids = [4];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=1b8cb746&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-1b8cb746> <h4 data-v-1b8cb746>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-1b8cb746>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.profile.bio)+"\n                        ")+"</p> "),(_vm.$route.query.isMyself !== 'true')?_vm._ssrNode("<button class=\"btn btn-sm btn-outline-secondary action-btn\" data-v-1b8cb746>","</button>",[_vm._ssrNode(((!_vm.profile.following)?("<i class=\"ion-plus-round\" data-v-1b8cb746></i>\n                                 \n                                Follow Eric Simons\n                            "):("<i class=\"ion-minus-round\" data-v-1b8cb746></i>\n                                 \n                                Unfollow\n                            ")))],2):_vm._ssrNode("<button class=\"btn btn-sm btn-outline-secondary action-btn\" data-v-1b8cb746>","</button>",[_c('nuxt-link',{staticStyle:{"color":"#aaa"},attrs:{"to":{name: 'setting'}}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n                            ")])],1)],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-1b8cb746>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-1b8cb746>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{article: _vm.tab === 'my_article'},attrs:{"to":{
                                    name: 'profile',
                                    query: {
                                        isMyself: _vm.$route.query.isMyself,
                                        tab: 'my_article'
                                    }
                                  },"exact":""}},[_vm._v("\n                                    My Articles\n                                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-1b8cb746>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{article: _vm.tab === 'favorite_article'},attrs:{"to":{
                                     name: 'profile',
                                     query: {
                                       isMyself: _vm.$route.query.isMyself,
                                       tab: 'favorite_article'
                                     }
                                   },"exact":""}},[_vm._v("\n                                    Favorited Articles\n                                ")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(articleInfo,index){return _vm._ssrNode("<div class=\"article-preview\" data-v-1b8cb746>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-1b8cb746>","</div>",[_c('nuxt-link',{attrs:{"to":{
                                name: 'profile',
                                params: {
                                    username: articleInfo.author.username
                                },
                                query: {
                                  tab: 'my_article'
                                }
                            }}},[_c('img',{attrs:{"src":articleInfo.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-1b8cb746>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                                    name: 'profile',
                                    params: {
                                        username: articleInfo.author.username
                                    },
                                    query: {
                                      tab: 'my_article'
                                    }
                                  }}},[_vm._v("\n                                    "+_vm._s(articleInfo.author.username)+"\n                                ")]),_vm._ssrNode(" <span class=\"date\" data-v-1b8cb746>"+_vm._ssrEscape(_vm._s(_vm._f("date")(articleInfo.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",articleInfo.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                                 active: articleInfo.favorited
                               }))+" data-v-1b8cb746><i class=\"ion-heart\" data-v-1b8cb746></i>"+_vm._ssrEscape(" "+_vm._s(articleInfo.favoritesCount)+"\n                            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                            name: 'article',
                            params: {
                                slug: articleInfo.slug
                            }
                        }}},[_c('h1',[_vm._v(_vm._s(articleInfo.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(articleInfo.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=1b8cb746&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/profile.js

const getUserDetail = query => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/profiles/${query.username}`
  });
};
// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "profile",
  middleware: 'auth',

  async asyncData({
    params,
    query
  }) {
    const tab = query.tab || 'my_article';
    const currentUser = await getUserDetail({
      username: params.username
    });
    const {
      profile
    } = currentUser.data;
    const queryArticleData = tab === 'my_article' ? {
      author: profile.username
    } : {
      favorited: profile.username
    };
    const myArticle = await Object(api_article["h" /* getGlobalArticle */])({ ...queryArticleData
    });
    const {
      articles,
      articlesCount
    } = myArticle.data;
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      profile,
      tab,
      articles,
      articlesCount
    };
  },

  watchQuery: ['tab'],
  methods: {
    async handleFavorite(article) {
      article.favoriteDisabled = true;
      await Object(api_article["b" /* cancelFavortie */])({
        article
      });
      article.favorited = false;
      article.favoritesCount -= 1;
      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b8cb746",
  "15696d38"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map