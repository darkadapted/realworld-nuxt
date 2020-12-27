exports.ids = [6];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=template&id=abd1fc12&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"navbar navbar-light\" data-v-abd1fc12>","</nav>",[_vm._ssrNode("<div class=\"container\" data-v-abd1fc12>","</div>",[_vm._ssrNode("<a href=\"index.html\" class=\"navbar-brand\" data-v-abd1fc12>conduit</a> "),_vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\" data-v-abd1fc12>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-abd1fc12>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.$route.path === '/'},attrs:{"to":"/","exact":""}},[_vm._v("Home")])],1),_vm._ssrNode(" "),(_vm.user)?[_vm._ssrNode("<li class=\"nav-item\" data-v-abd1fc12>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/editor"}},[_c('i',{staticClass:"ion-compose"}),_vm._v(" New Post\n                            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-abd1fc12>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/setting"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Settings\n                            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-abd1fc12>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
                                  name: 'profile',
                                  params: {
                                      username: _vm.user.username
                                  },
                                  query: {
                                      isMyself: 'true',
                                      tab: 'my_article'
                                  }
                               }}},[_c('img',{staticClass:"user-pic",attrs:{"src":_vm.user.image}}),_vm._v("\n                                "+_vm._s(_vm.user.username)+"\n                            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-abd1fc12>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_c('i',{staticClass:"ion-log-ou"}),_vm._v(" log out\n                            ")])],1)]:[_vm._ssrNode("<li class=\"nav-item\" data-v-abd1fc12>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/login"}},[_vm._v("\n                                Sign in\n                            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-abd1fc12>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/register"}},[_vm._v("\n                                Sign up\n                            ")])],1)]],2)],2)]),_vm._ssrNode(" "),_c('nuxt-child'),_vm._ssrNode(" "),_vm._ssrNode("<footer data-v-abd1fc12>","</footer>",[_vm._ssrNode("<div class=\"container\" data-v-abd1fc12>","</div>",[_c('nuxt-link',{staticClass:"logo-font",attrs:{"to":"/"}},[_vm._v("\n                    Sign up\n                ")]),_vm._ssrNode(" <span class=\"attribution\" data-v-abd1fc12>\n                    An interactive learning project from <a href=\"https://thinkster.io\" data-v-abd1fc12>Thinkster</a>. Code &amp; design licensed under MIT.\n                </span>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=template&id=abd1fc12&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : null;
/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: "LayoutIndex",
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    logOut() {
      this.$store.commit('setUser', null);
      Cookie.set('auth', null);
    }

  }
});
// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/layout/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "abd1fc12",
  "720bf391"
  
)

/* harmony default export */ var layout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map