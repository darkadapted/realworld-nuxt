import axios from "axios";

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io',
});

export default ({store}) => {
    request.interceptors.request.use(function(config) {
        try {
            const { user } = store.state;
            if (user && user.token) {
                config.headers.Authorization = `Token ${user.token}`
            }
            return config
        }catch (err) {
            return Promise.reject(err)
        }
    })
}


