exports.ids = [2];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=38aa186b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-38aa186b><div class=\"row\" data-v-38aa186b><ul class=\"error-messages\" data-v-38aa186b>"+(_vm._ssrList((_vm.error),function(message,field){return ((_vm._ssrList((message),function(err,index){return ("<li data-v-38aa186b>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(err))+"</li>")})))}))+"</ul> <div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-38aa186b><form data-v-38aa186b><fieldset data-v-38aa186b><fieldset class=\"form-group\" data-v-38aa186b><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\" data-v-38aa186b></fieldset> <fieldset class=\"form-group\" data-v-38aa186b><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\" data-v-38aa186b></fieldset> <fieldset class=\"form-group\" data-v-38aa186b><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\" data-v-38aa186b>"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-38aa186b><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.article.tags)))+" class=\"form-control\" data-v-38aa186b><div class=\"tag-list\" data-v-38aa186b></div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-38aa186b>\n                            Publish Article\n                        </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=38aa186b&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
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
    };
  },

  created() {
    if (this.$route.query.slug) {
      this.query();
    }
  },

  methods: {
    async query() {
      const {
        data
      } = await Object(article["f" /* getArticle */])({
        slug: this.$route.query.slug
      });
      this.article = {
        title: data.article.title,
        description: data.article.description,
        body: data.article.body,
        tags: data.article.tags
      };
    },

    async createOrEdit() {
      const addOrEdit = this.$route.query.slug ? article["m" /* updataArticle */] : article["d" /* createArticle */];

      try {
        const {
          data
        } = await addOrEdit({
          data: {
            article: this.article
          },
          slug: this.$route.query.slug
        });
        const {
          article
        } = data;
        this.$router.push({
          name: 'article',
          params: {
            slug: article.slug
          },
          query: {
            isMyself: 'true'
          }
        });
      } catch (err) {
        this.error = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38aa186b",
  "f13f3bd8"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map