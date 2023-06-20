import {useSelector, useDispatch} from 'react-redux'
import { increase_counter, decrease_counter,increase_if_odd } from "../redux/actions";

const Counter = () => {
    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch()

    return(
        <div id="counter-block">
            <span>counter is {counter}</span>
            <button onClick={() => dispatch(increase_counter(counter))}> 
                + 
            </button>
            <button onClick={() => dispatch(decrease_counter(counter))}> 
                - 
            </button>
            <button onClick={() => dispatch(increase_if_odd(counter))}> Increment if odd </button>
            <button onClick={() => setTimeout(() => dispatch(increase_counter(counter)), 1000)}> Increment async </button>
        </div>
    )
}

export default Counter