import {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {insert_transaction, update_transaction } from "../redux/action";

const TransactionForm = () => {
  const [formData, setFormData] = useState({});
    //   accountNumber: '',
    //   FSC: '',
    //   name: '',
    //   amount: '',
  const currentIndex = useSelector((state) => {
    return state.currentIndex
  })
  const list = useSelector(state=> state.list)

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentIndex === -1) {
        dispatch(insert_transaction(formData))
    }
    else{
        dispatch(update_transaction(formData))
    }
    setFormData({
      accountNumber: '',
      FSC: '',
      name: '',
      amount: '',
    })
  };

  useEffect(() => {
    if(currentIndex != -1) {
        const trx = list[currentIndex];
        setFormData({
            accountNumber: trx.accountNumber,
            FSC: trx.FSC,
            name: trx.name,
            amount: trx.amount
        })
    } 
  }, [currentIndex])


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="account-number" />
        <input
          type="text"
          id="account-number"
          value={formData.accountNumber}
          name='accountNumber'
          onChange={handleChange}
          placeholder='Account Number'
        />
      </div>
      <div>
        <label htmlFor="FSC"/>
        <input
          type="text"
          id="fsc"
          name='FSC'
          value={formData.FSC}
          onChange={handleChange}
          placeholder='FSC'
        />
      </div>
      <div>
        <label htmlFor="name"/>
        <input
          type="name"
          id="name"
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='name'
        />
      </div>
      <div>
        <label htmlFor="amount"/>
        <input
          id="amount"
          name='amount'
          value={formData.amount}
          onChange={handleChange}
          placeholder='amount'
        ></input>
      </div>
      <button type="submit" >{currentIndex === -1 ? 'submit': 'Edit'}</button>
    </form>
  );
}

export default TransactionForm;