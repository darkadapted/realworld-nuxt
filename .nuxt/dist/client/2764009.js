(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"i",(function(){return o})),r.d(e,"j",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"g",(function(){return v})),r.d(e,"k",(function(){return d})),r.d(e,"c",(function(){return m})),r.d(e,"a",(function(){return h})),r.d(e,"l",(function(){return _})),r.d(e,"d",(function(){return O})),r.d(e,"e",(function(){return y})),r.d(e,"m",(function(){return C})),r.d(e,"f",(function(){return j}));var n=r(60),c=(r(186),function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})}),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t.article.slug,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t.article.slug,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t.slug)})},d=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t.username,"/follow")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t.username,"/follow")})},h=function(t){var e=t.slug,data=t.data;return Object(n.b)({method:"POST",url:"/api/articles/".concat(e,"/comments"),data:data})},_=function(t){var e=t.slug;return Object(n.b)({method:"GET",url:"/api/articles/".concat(e,"/comments")})},O=function(t){var data=t.data;return Object(n.b)({method:"POST",url:"/api/articles",data:data})},y=function(data){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(data.slug)})},C=function(t){var e=t.slug,data=t.data;return Object(n.b)({method:"PUT",url:"/api/articles/".concat(e),data:data})},j=function(data){return Object(n.b)({method:"GET",url:"/api/articles/".concat(data.slug)})}},186:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return o}));var n=r(60),c=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},o=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})}},191:function(t,e,r){var n=r(6),c=r(28),o=r(12),l=r(192),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(h):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},h=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},192:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},201:function(t,e,r){"use strict";var n=r(4),c=r(21),o=r(27),l=r(122),f=r(62),v=r(12),d=r(50).f,m=r(63).f,h=r(10).f,_=r(191).trim,O=n.Number,y=O,C=O.prototype,j="Number"==o(r(78)(C)),E="trim"in String.prototype,x=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=E?e.trim():_(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!O(" 0o1")||!O("0b1")||O("+0x1")){O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(j?v((function(){C.valueOf.call(r)})):"Number"!=o(r))?l(new y(x(e)),r,O):x(e)};for(var k,w=r(7)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)c(y,k=w[N])&&!c(O,k)&&h(O,k,m(y,k));O.prototype=C,C.constructor=O,r(13)(n,"Number",O)}},202:function(t,e,r){var n=r(6),c=r(203);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},203:function(t,e,r){var n=r(4).parseInt,c=r(191).trim,o=r(192),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},261:function(t,e,r){"use strict";r.r(e);r(61),r(24),r(49);var n=r(34),c=(r(25),r(11),r(37),r(9)),o=(r(201),r(202),r(36),r(3)),l=r(185),f=r(60),v=r(46);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"index",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,d,m,h,_,O,y,C,j,E;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=1|Number.parseInt(r.page),v=20,d=n.state.user&&"your_feed"===r.tab?l.i:l.h,e.next=6,Promise.all([d({limit:v,offset:(o-1)*v,tag:r.tag}),(x=void 0,Object(f.b)({method:"GET",url:"/api/tags",params:x}))]);case 6:return m=e.sent,h=Object(c.a)(m,2),_=h[0],O=h[1],y=_.data,C=y.articles,j=y.articlesCount,E=O.data.tags,C.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{articles:C,articlesCount:j,limit:v,page:o,tags:E});case 14:case"end":return e.stop()}var x}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({pageSize:function(){return Math.floor(this.articlesCount/this.limit)}},Object(v.b)(["user"])),watchQuery:["page","tag","tab"],methods:{handleFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,article.favorited){t.next=8;break}return t.next=4,Object(l.j)({article:article});case 4:article.favorited=!0,article.favoritesCount+=1,t.next=12;break;case 8:return t.next=10,Object(l.b)({article:article});case 10:article.favorited=!1,article.favoritesCount-=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(23),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[null!==t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.$route.query.tab},attrs:{to:{name:"home",query:{tab:"your_feed"}},exact:""}},[t._v("\n                                Your Feed\n                            ")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===(t.$route.query.tab||"global_feed")},attrs:{to:{name:"home",query:{tab:"global_feed",page:1|t.$route.query.page}},exact:""}},[t._v("\n                                Global Feed\n                            ")])],1),t._v(" "),t.$route.query.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.$route.query.tab},attrs:{to:{name:"home",query:{tab:"tag",page:1|t.$route.query.page,tag:t.$route.query.tag}},exact:""}},[t._v("\n                                #"+t._s(t.$route.query.tag)+"\n                            ")])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(e,n){return r("div",{key:n,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:e.author.username},query:{tab:"my_article"}}}},[r("img",{attrs:{src:e.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:e.author.username},query:{tab:"my_article"}}}},[t._v("\n                                "+t._s(e.author.username)+"\n                            ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:e.favorited},attrs:{disabled:e.favoriteDisabled},on:{click:function(r){return t.handleFavorite(e)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(e.favoritesCount)+"\n                        ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:e.slug}}}},[r("h1",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)}))],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),t._l(t.tags,(function(e,n){return r("div",{key:n,staticClass:"tag-list"},[r("nuxt-link",{staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{page:1|t.$route.query.page,tag:e,tab:"tag"}}}},[t._v("\n                            "+t._s(e)+"\n                        ")])],1)}))],2)]),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.pageSize,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:(t.$route.query.page||1)==e}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag,tab:t.$route.query.tab}}}},[t._v("\n                            "+t._s(e)+"\n                        ")])],1)})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,"170e63b2",null);e.default=component.exports}}]);