import { Card } from "react-bootstrap";
import './skillCard.css'

interface SkillCardProps{
    title: string,
    img: string
}

const SkillCard: React.FC<SkillCardProps> = ({title, img}) => {
    return (
        <Card className='custom-skill-card'>
            <img className="image" src={img}  />
            <p className='title'>{title}</p>
        </Card>
    );
}

export default SkillCard;