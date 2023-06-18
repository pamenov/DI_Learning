import React from "react";
import data from './ex3_data.json'

class Example2 extends React.Component{
    render() {
        const dataPrepared = data.Skills.map((item, index) => {
            return (
                <>
                <h3> {item.Area} </h3>
                <ul key={index}>
                    {item.SkillSet.map((obj, objIndex) => {
                        const mykey = `${index}_${objIndex}`
                        console.log(mykey)
                        return (
                        <li key={`${index}_${objIndex}`}>
                            {obj.Name}
                        </li>
                        )
                    })}
                </ul>

                </>
            )
        })
        return (
            <>
                <h1> Exercise 3_2</h1>
                {dataPrepared}
            

            </>
        )
    }
}

export default Example2