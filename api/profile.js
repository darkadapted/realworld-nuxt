import { request } from "@/plugins/request";

export const getUserDetail = (query) => {
    return request({
        method: 'GET',
        url: `/api/profiles/${query.username}`
    })
}
