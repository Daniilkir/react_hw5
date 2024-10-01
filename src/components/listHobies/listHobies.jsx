import { ListHobie } from './listHobies'
import { CardHobie } from './listHobies'
import { CardTitle } from './listHobies'
import { CardImage } from './listHobies'
import { CardText } from './listHobies'

export const ListHobby = ({ hobbies }) => {
    return (

        <ListHobie>
            {hobbies.map(hobbies =>
                <li key={hobbies.id}>
                    <CardHobie hobbies={hobbies}>
                        <CardTitle>{hobbies.name}</CardTitle>
                        <CardImage src={hobbies.image} alt={hobbies.alt}></CardImage>
                        <CardText>{hobbies.about}</CardText>
                    </CardHobie>
                </li>
            )
            }
        </ListHobie >

    )
}