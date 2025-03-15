import "./S2Presentation.scss";
import ScrollSection, { ScrollSectionContext } from "./ScrollSection";
import React, {useContext} from "react";

export default function S2Presentation(){

    return(
        <>
        <ScrollSection id="presentation" sectionClassName="presentation-section" enterPosition={0.5} exitPosition={0.6}>
        <Content />
        </ScrollSection>
        </>
    );

    function Content() {
        const sectionActive = useContext(ScrollSectionContext); // Absorve as mudanças do state do outro component.
    
        return (
            <>
            {sectionActive ?
            <a href="#header" className='up-button'>&#11165;</a>
            : null
            }

            <div className={`presentation-background ${sectionActive ? 'presentation-background-active' : 'presentation-background-inactive'}`}></div>
        <div className={`presentation-container ${sectionActive ? 'presentation-container-active' : 'presentation-container-inactive'}`}>
            <div className="who-we-are-container">
                <h1>Quem somos?</h1>
                <p>Fundada em 2022 em Copacabana, a Prime Language School é dedicada a oferecer aulas de inglês flexíveis, adaptadas às necessidades individuais de cada aluno. 
                    Nossa abordagem comunicativa prioriza a flexibilidade e a personalização, criando um ambiente de aprendizado dinâmico e eficaz. 
                    Além disso, a PRIME tem o propósito de preparar seus alunos para os principais exames internacionais, garantindo certificações que fazem com que suas habilidades 
                    sejam reconhecidas mundialmente. Proporcionamos um ensino de qualidade, visando capacitar alunos e empresas a alcançarem seus objetivos pessoais e profissionais. </p>
            </div>
            <div className="proprietor-container">
                <div className="proprietor-image"></div>
                <div className="proprietor-text">
                    <p>Alexandre Mello</p>
                    <div className="proprietor-image-mobile"></div>
                    <p>Alexandre Mello, fundador da Prime Language School, é especializado em psicopedagogia e gestão escolar, aliada à certificação em ensino de inglês (ELT) 
                        pela Cambridge English. Com 17 anos de carreira e vivência no exterior, criou a PRIME para oferecer um ambiente de aprendizado inovador e eficaz. 
                        Alexandre acredita ser primordial a capacitação de alunos em qualquer fase de vida, desde a fase infantil até a terceira idade.</p>
                </div>
            </div>
            <div className="course-images">
                <div className="course-image1"></div>
                <div className="course-image2"></div>
            </div>
        </div>
        </>
        );
    }
}