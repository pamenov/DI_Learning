export const reducer = (state, action={}) => {
    switch (action.type) {
        case 'DECREASE':
            console.log("reducer DECREASE")
            state.count -= 1
        case 'INCREASE':
            console.log("reducer INCREASE")
            state.count += 1
        default:
            return {...state}
    }
    return {...state}

}

