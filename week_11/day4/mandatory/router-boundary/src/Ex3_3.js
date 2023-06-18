import React from "react";
import data from './ex3_data.json'

class Example3 extends React.Component{
    render() {
        const dataPrepared = data.Experiences.map((item, index) => {
            return (
                <>
                    <img key={`img-${index}`} src={item.logo} />
                    <br/>
                    <a key={`a-${index}`} href={item.url}>{item.url}</a>
                    <br/>
                    <h6 key={`h6-${index}`}>{item.roles[0].title}</h6>
                    <p key={`addres-${index}`}>{item.roles[0].startDate} {item.roles[0].location}</p>
                    <p key={`description-${index}`}>{item.roles[0].description}</p>

                </>
            )
        })
        return (
            <>
                <h1> Exercise 3_3</h1>
                {dataPrepared}
            

            </>
        )
    }
}

export default Example3