export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const INCREASE_IF_ODD = 'INCREASE_IF_ODD'


export const increase_counter = (value) => ({
    type: INCREASE,
    payload: value
})


export const decrease_counter = (value) => ({
    type: DECREASE,
    payload: value
})

export const increase_if_odd = (value) => ({
    type: INCREASE_IF_ODD,
    payload: value
})