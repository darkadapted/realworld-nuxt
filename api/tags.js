import { request } from "@/plugins/request";

// 获取标签
export const getTags = params => {
    return request({
        method: 'GET',
        url: '/api/tags',
        params
    })
}
