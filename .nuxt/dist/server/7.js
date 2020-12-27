exports.ids = [7];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=61c6483e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-61c6483e><div class=\"row\" data-v-61c6483e><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-61c6483e><h1 class=\"text-xs-center\" data-v-61c6483e>Your Settings</h1> <form data-v-61c6483e><fieldset data-v-61c6483e><fieldset class=\"form-group\" data-v-61c6483e><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.userData.image)))+" class=\"form-control\" data-v-61c6483e></fieldset> <fieldset class=\"form-group\" data-v-61c6483e><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.userData.username)))+" class=\"form-control form-control-lg\" data-v-61c6483e></fieldset> <fieldset class=\"form-group\" data-v-61c6483e><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-61c6483e>"+_vm._ssrEscape(_vm._s(_vm.userData.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-61c6483e><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.userData.email)))+" class=\"form-control form-control-lg\" data-v-61c6483e></fieldset> <fieldset class=\"form-group\" data-v-61c6483e><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.userData.password)))+" class=\"form-control form-control-lg\" data-v-61c6483e></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"btn btn-lg btn-primary pull-xs-right\" data-v-61c6483e>\n                            Update Settings\n                        </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=61c6483e&scoped=true&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/setting.js
 // 获取当前用户

const getCurrentUser = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/user`
  });
}; // 更新用户信息

const updateUser = data => {
  return Object(request["b" /* request */])({
    method: 'PUT',
    url: `/api/user`,
    data
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: "setting",
  middleware: 'auth',

  data() {
    return {
      userData: {
        image: '',
        username: '',
        email: '',
        bio: '',
        password: null
      },
      loading: false
    };
  },

  async asyncData() {
    const {
      data
    } = await getCurrentUser();
    const {
      user
    } = data;
    return {
      user
    };
  },

  mounted() {
    this.userData = {
      image: this.user.image,
      username: this.user.username,
      email: this.user.email,
      bio: this.user.bio
    };
  },

  methods: {
    async updateSetting() {
      this.loading = true;
      await updateUser({
        user: this.userData
      });
      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61c6483e",
  "174d4e4a"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map