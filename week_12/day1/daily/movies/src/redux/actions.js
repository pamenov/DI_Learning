export const DETAIL ="SELECT_MOVIE"

export const selectMovie = (details) => {
    console.log(details, "in action")
    return(
    {
    type: DETAIL,
    details
})}
