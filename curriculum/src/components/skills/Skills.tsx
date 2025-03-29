import { Container, Row } from "react-bootstrap";
import SkillCard from "./SkillCard";
import "./skills.css"
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
    const { t } = useTranslation('translation');
    const skills = [
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "Java Script"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "Type Script"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", title: "Java"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", title: "Kotlin"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", title: "C"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", title: "C++"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", title: "C#"},
        {img: "./rust_logo.png", title: "Rust"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", title: "Docker"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg", title: "Kubernetes"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", title: "Spring"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", title: "Postgresql"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", title: "MongoDB"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", title: "Firebase"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", title: "Android"},
    ]
    return (
        <Container fluid>
            <h1 className="skills-title">{t('skillsTitle')}</h1>
            <Row>
                {
                    skills.map((skill)=>{
                        return <SkillCard 
                        title={skill.title}
                        img={skill.img}
                        />
                    })
                }
            </Row>
        </Container>
    );
}

export default Skills;