import { createClient } from "pexels"

export const Foo = () => {
    const client = createClient('4lT5u8gPTgyO7WtQKY5b0i3QMdYixIU9TAKa9p7N4qzwXQvLvDxdFh1D');
    const query = 'Nature';
    
    client.photos.search({ query, per_page: 1 }).then(photos => {console.log(photos)});

    return (
        <h1> I've tried to request</h1>
    )
}