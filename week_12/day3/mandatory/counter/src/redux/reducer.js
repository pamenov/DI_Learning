import { INCREASE, DECREASE, INCREASE_IF_ODD } from "./actions"

const initialState = {
    counter: 0
}

const reducer = (state=initialState, action={}) => {
    switch (action.type){
        case INCREASE:
            return {...state, counter: action.payload + 1}
        case DECREASE:
            return {...state, counter: action.payload - 1}
        case INCREASE_IF_ODD:
            return {...state, counter: action.payload + action.payload % 2}
        default:
            return state
    }

    return state
}

export default reducer