import { ListHobie } from './listHobies'
import { CardHobies } from '../cardHobies/cardHobies.jsx'

export const ListHobby = ({ hobbies }) => {
    return (

        <ListHobie>
            {hobbies.map(hobbies =>
                <li key={hobbies.id}>
                    <CardHobies hobbies={hobbies} />
                </li>
            )}
        </ListHobie>

    )
}