(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{185:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"j",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"g",(function(){return f})),r.d(e,"k",(function(){return m})),r.d(e,"c",(function(){return v})),r.d(e,"a",(function(){return h})),r.d(e,"l",(function(){return O})),r.d(e,"d",(function(){return y})),r.d(e,"e",(function(){return j})),r.d(e,"m",(function(){return w})),r.d(e,"f",(function(){return E}));var n=r(60),c=(r(186),function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})}),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t.article.slug,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t.article.slug,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t.slug)})},m=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t.username,"/follow")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t.username,"/follow")})},h=function(t){var e=t.slug,data=t.data;return Object(n.b)({method:"POST",url:"/api/articles/".concat(e,"/comments"),data:data})},O=function(t){var e=t.slug;return Object(n.b)({method:"GET",url:"/api/articles/".concat(e,"/comments")})},y=function(t){var data=t.data;return Object(n.b)({method:"POST",url:"/api/articles",data:data})},j=function(data){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(data.slug)})},w=function(t){var e=t.slug,data=t.data;return Object(n.b)({method:"PUT",url:"/api/articles/".concat(e),data:data})},E=function(data){return Object(n.b)({method:"GET",url:"/api/articles/".concat(data.slug)})}},186:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return o}));var n=r(60),c=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},o=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})}},266:function(t,e,r){"use strict";r.r(e);r(36);var n=r(3),c=r(185),o={name:"editor",middleware:"auth",data:function(){return{article:{title:"",description:"",body:"",tags:""},error:[]}},created:function(){this.$route.query.slug&&this.query()},methods:{query:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.f)({slug:t.$route.query.slug});case 2:r=e.sent,data=r.data,t.article={title:data.article.title,description:data.article.description,body:data.article.body,tags:data.article.tags};case 5:case"end":return e.stop()}}),e)})))()},createOrEdit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query.slug?c.m:c.d,e.prev=1,e.next=4,r({data:{article:t.article},slug:t.$route.query.slug});case 4:n=e.sent,data=n.data,article=data.article,t.$router.push({name:"article",params:{slug:article.slug},query:{isMyself:"true"}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.error=e.t0.response.data.errors;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}},l=r(23),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("ul",{staticClass:"error-messages"},[t._l(t.error,(function(e,n){return t._l(e,(function(e,c){return r("li",{key:c},[t._v(t._s(n)+" "+t._s(e))])}))}))],2),t._v(" "),r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",{on:{click:function(t){t.preventDefault()}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tags,expression:"article.tags"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article.tags},on:{input:function(e){e.target.composing||t.$set(t.article,"tags",e.target.value)}}}),r("div",{staticClass:"tag-list"})]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.createOrEdit}},[t._v("\n                            Publish Article\n                        ")])])])])])])])}),[],!1,null,"38aa186b",null);e.default=component.exports}}]);