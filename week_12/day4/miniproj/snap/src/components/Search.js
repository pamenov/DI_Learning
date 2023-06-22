import CategoryButtons from "./CategoryButtons"
import AppContext from "../AppContext";
import {useContext} from "react"

const Search = () => {
    const topic = useContext(AppContext)
    return(
        <div>
            Search
            <CategoryButtons/>
        </div>
    )
}

export default Search;