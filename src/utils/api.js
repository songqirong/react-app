import axios from './axios';
export function fetchLogin(data){
    return axios({
        url:'/users/cms/login',
        method:'post',
        data
    });
}
export function fetchGetCates(params){
    return axios({
        url:'/cates/cms/getCates',
        method:'get',
        params
    });
}
export function fetchGetCatesCount(params){
    return axios({
        url:'/cates/cms/getCatesCount',
        method:'get',
        params
    });
}
export function fetchAddCate(data){
    return axios({
        url:'/cates/cms/addCate',
        method:'post',
        data
    });
}
export function fetchRemoveCate(data){
    return axios({
        url:'/cates/cms/removeCate',
        method:'post',
        data
    });
}
export function fetchUpdateCate(data){
    return axios({
        url:'/cates/cms/updateCate',
        method:'post',
        data
    });
}
export function fetchAddGood(data){
    return axios({
        url:'/goods/cms/addGood',
        method:'post',
        data
    });
}
export function fetchCreateBanner(data){
    return axios({
        url:'/jd/cms/createBanner',
        method:'post',
        data
    });
}
export function fetchGetCateGoods(params){
    return axios({
        url:'/goods/cms/getCateGoods',
        method:'get',
        params
    });
}
export function fetchGetAllGood(params){
    return axios({
        url:'/goods/cms/getAllGood',
        method:'get',
        params
    });
}
export function fetchRemoveGood(data){
    return axios({
        url:'/goods/cms/removeGood',
        method:'post',
        data
    });
}
export function fetchGetGoodDetail(data){
    return axios({
        url:'/goods/cms/getGoodDetail',
        method:'post',
        data
    });
}
export function fetchRemoveBanner(data){
    return axios({
        url:'/jd/cms/removeBanner',
        method:'post',
        data
    });
}
export function fetchGetBanner(params){
    return axios({
        url:'/jd/cms/getBanner',
        method:'get',
        params
    });
}

// 注册 {username, password, password2 }
export function fetchShopRegist(data) {
    return axios({
        url: '/users/shop/regist',
        method: 'POST',
        data
    })
}

// 登录 {username, password }
export function fetchShopLogin(data) {
    return axios({
        url: '/users/shop/login',
        method: 'POST',
        data
    })
}

export function fetchGetUser(params) {
    return axios({
        url: '/users/shop/all',
        method: 'get',
        params
    })
}

export default{
    fetchLogin,
    fetchGetCates,
    fetchGetCatesCount,
    fetchAddCate,
    fetchRemoveCate,
    fetchUpdateCate,
    fetchAddGood,
    fetchGetCateGoods,
    fetchGetAllGood,
    fetchRemoveGood,
    fetchGetGoodDetail,
    fetchCreateBanner,
    fetchRemoveBanner,
    fetchGetBanner
};