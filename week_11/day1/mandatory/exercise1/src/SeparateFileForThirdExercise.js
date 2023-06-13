import ThirdComponent from './Exercise3'

function UserFavoriteColors() {
    const whyTheHellFunctionCalledColorsIDontKnow = ThirdComponent.user.favAnimals.map(
        (item, i) => {
            return <li key={i}>{item} </li>
        }
    )
    return (
        <ul>
            {whyTheHellFunctionCalledColorsIDontKnow}
        </ul>
    )
}

export default UserFavoriteColors