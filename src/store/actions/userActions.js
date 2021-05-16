import {
    USER_GET,
} from '@/store/actionTypes';
import {
    fetchGetUser,
} from '@/utils/api';
export function getUser(params){
    return function (dispatch){
        fetchGetUser(params).then(res=>{
            dispatch({
                type:USER_GET,
                payload:res
            })
        }).catch(err=>{
            dispatch({
                type:USER_GET,
                payload:[]
            })
        })
    }
}
