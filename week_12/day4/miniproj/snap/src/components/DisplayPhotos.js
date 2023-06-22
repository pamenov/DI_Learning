import AppContext from "../AppContext"
import { useContext, useEffect } from "react"
import { createClient } from 'pexels';

const DisplayPhotos = () => {
    const values = useContext(AppContext)
    const topic = values.values.topic
    console.log(topic)
    // const client = createClient('4lT5u8gPTgyO7WtQKY5b0i3QMdYixIU9TAKa9p7N4qzwXQvLvDxdFh1D')
    

    // useEffect(() => {
    //     // const client = values.values.client
    //     console.log(client)
    //     client.photos.search({ topic, per_page: 1 }).then(photos => {console.log(photos)});
    // }, [])

    return(
        <>
        <h3>{topic} Pictures</h3>
        </>
    )
}

export default DisplayPhotos;