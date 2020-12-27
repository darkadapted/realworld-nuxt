const cookieparser = process.server ? require('cookieparser') : null
export const state = () => {
   return {
     user: null
   }
}

export const mutations = {
    setUser(state, payload) {
        state.user = payload;
    }
}


export const actions = {
    // nuxtServerInit 是一个特殊的 action方法
    // 会在服务端渲染期间自动调用
    // 作用： 初始化容器数据，传递数据给客户端使用
    nuxtServerInit({ commit }, { req }) {
        let auth = null;
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = JSON.parse(parsed.auth);
            }catch (err) {

            }
        }
        commit('setUser', auth)
    }
}
