import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1972f2a6 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _77189b5b = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _6c33186d = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _04f581ad = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _2afac49f = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _0da418e9 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _2880760c = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1972f2a6,
    children: [{
      path: "",
      component: _77189b5b,
      name: "home"
    }, {
      path: "/login",
      component: _6c33186d,
      name: "login"
    }, {
      path: "/register",
      component: _6c33186d,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _04f581ad,
      name: "profile"
    }, {
      path: "/setting",
      component: _2afac49f,
      name: "setting"
    }, {
      path: "/editor",
      component: _0da418e9,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2880760c,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
