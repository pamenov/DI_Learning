import TransactionForm from "./TransactionForm";
import {useSelector, useDispatch} from 'react-redux'
import { insert_transaction, update_index_transaction, update_transaction, delete_transaction } from "../redux/action";


const TransactionList = (props) => {

    const list = useSelector(state=> state.list)

    const dispatch = useDispatch()
    return (
        <>
            <TransactionForm/>
            <h3> Transaction List</h3>
            <table ><tbody>
                <tr><td>Account number</td><td>FSC</td><td>Name</td><td>Amount</td><td></td></tr>
                {
                    list.map((item, i) => {
                        return(
                            <tr key={i}>
                                <td>{item.accountNumber}</td>
                                <td>{item.FSC}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <button onClick={()=>dispatch(update_index_transaction(i))}>
                                        Edit
                                    </button>
                                    <button onClick={()=>dispatch(delete_transaction(i))}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody></table>
        </>
    )
}

// style={{border:1px solid #ccc}}
export default TransactionList;