exports.ids = [5];
exports.modules = {

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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=5cc16c7d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-5cc16c7d>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5cc16c7d>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-5cc16c7d>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-5cc16c7d>"+_vm._ssrEscape("\n                    "+_vm._s(!_vm.isLogin ? 'Register' : 'Sign up')+"\n                ")+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-5cc16c7d>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":{path: '/register'}}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":{path: '/login'}}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-5cc16c7d>"+(_vm._ssrList((_vm.error),function(message,field){return ((_vm._ssrList((message),function(err,index){return ("<li data-v-5cc16c7d>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(err))+"</li>")})))}))+"</ul> <form data-v-5cc16c7d>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-5cc16c7d><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-5cc16c7d></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-5cc16c7d><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-5cc16c7d></fieldset> <fieldset class=\"form-group\" data-v-5cc16c7d><input type=\"password\" minlength=\"8\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-5cc16c7d></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-5cc16c7d>"+_vm._ssrEscape("\n                        "+_vm._s(!_vm.isLogin ? 'Sign up':'Sign In')+"\n                    ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=5cc16c7d&scoped=true&

// EXTERNAL MODULE: ./api/login.js
var login = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "index",
  middleware: 'noAuth',

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      error: []
    };
  },

  computed: {
    isLogin() {
      // this.user = {
      //     username: '',
      //     email: '123321123@163.com',
      //     password: '12345678'
      // };
      return this.$route.name === 'login';
    }

  },
  methods: {
    loginOrRegister() {
      return this.isLogin ? Object(login["a" /* login */])({
        user: this.user
      }) : Object(login["b" /* register */])({
        user: this.user
      });
    },

    async onsubmit() {
      if (this.isLogin) {
        delete this.user.username;
      }

      try {
        const {
          data
        } = await this.loginOrRegister();
        this.$store.commit('setUser', data.user);
        Cookie.set('auth', data.user);
        this.$router.push('/');
      } catch (err) {
        this.error = err.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5cc16c7d",
  "b4e00010"
  
)

/* harmony default export */ var pages_login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map