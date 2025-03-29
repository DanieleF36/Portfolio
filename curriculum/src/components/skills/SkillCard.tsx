import { Card } from "react-bootstrap";
import './skillCard.css'

interface SkillCardProps{
    title: string,
    img: string
}

/**
 * SkillCard Component.
 *
 * This component renders a card representing a skill with an image and title.
 *
 * @param {SkillCardProps} props - The component props containing the skill title and image URL.
 * @returns {JSX.Element} The SkillCard component.
 */
const SkillCard: React.FC<SkillCardProps> = ({title, img}) => {
    return (
        <Card className='custom-skill-card'>
            <img className="image" src={img}  />
            <p className='title'>{title}</p>
        </Card>
    );
}

export default SkillCard;