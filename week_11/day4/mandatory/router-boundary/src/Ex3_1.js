import React from "react";
import data from './ex3_data.json'

class Example1 extends React.Component{
    render() {
        return (
            <>
                <h1> Social media</h1>
                <ul>
                {data.SocialMedias.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
                </ul>
            </>
        )
    }
}

export default Example1