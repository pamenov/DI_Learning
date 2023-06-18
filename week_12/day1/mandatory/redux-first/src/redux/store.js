import {createStore} from 'redux';
import {reducer} from './reducer'

const INITIAL_STATE = {
    count: 0
}

const store = createStore(reducer)

export default store;