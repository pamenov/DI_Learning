import { useContext } from "react";
import AppContext from "../AppContext";
import { Link } from 'react-router-dom'



const CategoryButtons = () => {
    // console.log(useContext(AppContext))
    const {values, setValues} = useContext(AppContext)
    const buttons = values.buttons
    // console.log(buttons)
    const clickHandle = (i) => {
        setValues({...values, topic:buttons[i]})
    }
    
    return(
        <div id="category-buttons">
            <Link to={"/" + buttons[0]}>
              <button>{buttons[0]}</button>
            </Link>
            <Link to={"/" + buttons[1]}>
            <button>{buttons[1]}</button>
            </Link>
            <Link to={"/" + buttons[2]}>
            <button>{buttons[2]}</button>
            </Link>
            <Link to={"/" + buttons[3]}>
            <button>{buttons[3]}</button> 
            </Link>
        </div>
    )
}

export default CategoryButtons;
