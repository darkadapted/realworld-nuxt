import { request } from "@/plugins/request";
import {login} from "./login";

// 获取公共的文章列表
export const getGlobalArticle = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 获取your_feed的文章列表
export const getYourFeedArticle = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}

// 点赞
export const handleFavortie = query => {
    return request({
        method: 'POST',
        url: `/api/articles/${query.article.slug}/favorite`,
    })
}

// 取消点赞
export const cancelFavortie = query => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${query.article.slug}/favorite`,
    })
}

// 获取文章详情
export const getArticleDetail = query => {
    return request({
        method: 'GET',
        url: `/api/articles/${query.slug}`,
    })
}

// 关注
export const handleFollow = params => {
    return request({
        method: 'POST',
        url: `/api/profiles/${params.username}/follow`,
    })
}

// 取消关注
export const cancelFollow = query => {
    return request({
        method: 'DELETE',
        url: `/api/profiles/${query.username}/follow`,
    })
}

// 发布评论
export const addComment = query => {
    const { slug, data } = query;
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data
    })
}


// 查询评论
export const queryComment = query => {
    const {slug} = query;
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}

// 新建 article
export const createArticle = params => {
    const { data } = params;
    return request({
        method: 'POST',
        url: `/api/articles`,
        data
    })
}

// 删除 article
export const deleteArticle = data => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${data.slug}`
    })
}

// 更新 article
export const updataArticle = params => {
    const { slug, data } = params
    return request({
        method: 'PUT',
        url: `/api/articles/${slug}`,
        data
    })
}

// 获取 article
export const getArticle = data => {
    return request({
        method: 'GET',
        url: `/api/articles/${data.slug}`
    })
}

