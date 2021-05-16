import {
    USER_GET,
} from '@/store/actionTypes';
let initState={
    users:[],
}
export default function userReducer(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case USER_GET:
            newState.users=action.payload.data
            return newState
        default:
            return newState
    }
}