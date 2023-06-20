export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const UPDATE_INDEX = 'UPDATE_INDEX';

export const insert_transaction = (trx) => ({
    type: INSERT,
    payload: trx
})

export const update_transaction = (trx) => ({
    type: UPDATE,
    payload: trx
})


export const delete_transaction = (trx) => ({ 
    type: DELETE,
    payload: trx
})

export const update_index_transaction = (trx) => ({
    type: UPDATE_INDEX,
    payload: trx
})
