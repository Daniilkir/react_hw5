import { CardHobie } from "./cardHobies"
import { CardTitle } from "./cardHobies"
import { CardText } from "./cardHobies"
import { CardImage } from "./cardHobies"

export const CardHobies = ({ hobbies }) => {
    return (
        <CardHobie>
            <CardTitle>{hobbies.name}</CardTitle>
            <CardImage src={hobbies.image} alt={hobbies.alt}></CardImage>
            <CardText>{hobbies.about}</CardText>
        </CardHobie>
    )
}