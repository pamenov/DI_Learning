import {INSERT, UPDATE, DELETE, UPDATE_INDEX} from './action'

const initState = {
    list: [],
    currentIndex: -1,
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case INSERT:
            return {...state, list: [...state.list], currentIndex: -1}
        case UPDATE:
            state.list[state.currentIndex] = action.payload
            return {...state, list:[...state.list], currentIndex: -1}
        case DELETE:
            state.list.splice(action.payload, 1)
            return {...state, list:[...state.list], currentIndex:-1}        
        case UPDATE_INDEX:
            return {...state, currentIndex: action.payload}
        default:
            return {...state}
    }
} 