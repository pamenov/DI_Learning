import React from "react";
import data from "./data.json"

class PostList extends React.Component {
    render() {
        const dataPrepared = data.map((obj, index) => {
            return (
            <div key={index}>
                <h2>{obj.title}</h2>
                <p> {obj.content} </p>
            </div>
            )
        })

        return (
            dataPrepared
        )
    }
}

export default PostList