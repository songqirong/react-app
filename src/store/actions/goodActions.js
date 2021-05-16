import {
    GET_CATE_GOOD,
    GET_CATES,
    GET_GOOD_DETAIL,
    RESET_GOOD_DETAIL
    // ADD_GOOD
} from '@/store/actionTypes';
import {
    fetchGetCateGoods,
    fetchGetCates,
    fetchGetGoodDetail
    // fetchAddGood
} from '@/utils/api';
export function getCateGood(params){
    return function(dispatch){
        fetchGetCateGoods(params).then(res=>{
            dispatch({
                type:GET_CATE_GOOD,
                payload:res
            })
        }).catch(()=>{
            dispatch({
                type:GET_CATE_GOOD,
                payload:[]
            })
        })    
    }
}
export function getCates(params){
    return function(dispatch){
        fetchGetCates(params).then(res=>{
            dispatch({
                type:GET_CATES,
                payload:res
            })
        }).catch(()=>{
            dispatch({
                type:GET_CATES,
                payload:{}
            })
        })    
    }
}


export function getGoodDetail(params) {
    return function(dispatch) {
        fetchGetGoodDetail(params).then(res=>{
            dispatch({
                type: GET_GOOD_DETAIL,
                payload: res
            })
        })
    }
}
  
export function resetDetail(payload) {
    return {
        type: RESET_GOOD_DETAIL,
        payload
    }
}
