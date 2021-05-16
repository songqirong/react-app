import {
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR    
} from '@/store/actionTypes';
const initState={
    list:[]
}
export default function todoReducer(state=initState,action){
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TODO_ADD:
            newState.list.push(action.payload)
            return newState
        case TODO_DEL:
            newState.list = newState.list.filter(ele=>(ele.id!==action.payload))
            return newState
        case TODO_UPD:
            newState.list.map(ele=>{
                if(ele.id===action.payload.id){
                    ele.task=action.payload.task
                }
                return false
            })
            return newState
        case TODO_CLEAR:
            newState.list=[]
            return newState
        default:
            return newState
    }
} 