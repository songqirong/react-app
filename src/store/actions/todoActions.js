import {
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR    
} from '@/store/actionTypes';
function todoAdd(payload){
    return{
        type:TODO_ADD,
        payload
    }
}
function todoDel(payload){
    return{
        type:TODO_DEL,
        payload
    }
}
function todoUpd(payload){
    return{
        type:TODO_UPD,
        payload
    }
}
function todoClear(payload){
    return{
        type:TODO_CLEAR,
    }
}
export{
    todoAdd,
    todoDel,
    todoUpd,
    todoClear
}