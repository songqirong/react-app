import {
    GET_CATE_GOOD,
    GET_CATES,
    GET_GOOD_DETAIL,
    RESET_GOOD_DETAIL
    // ADD_GOOD
} from '@/store/actionTypes';
let initState={
    goods:[],
    total:0,
    cateData:{},
    // addData:{}
    detail:{}
    
}
export default function goodReducer(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {        
        case GET_CATE_GOOD:
            newState.total=action.payload.total
            newState.goods=action.payload.data
            return newState;
        case GET_CATES:
            newState.cateData=action.payload;
            return newState;
        case GET_GOOD_DETAIL:
            newState.detail=action.payload.data[0];
            return newState;
        case RESET_GOOD_DETAIL:
            newState.detail=action.payload;
            return newState;
        default:
            return newState;
    }
}