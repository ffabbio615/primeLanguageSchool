import { throttle } from "lodash";
import "./S3Services.scss";
import React, { useEffect, useRef, useState } from 'react';

export default function S3Services() {
    
    const servicesSectionRef = useRef(null); // Referência para a seção "services"
    const [isActive, setIsActive] = useState(false); // Estado para controlar a classe ativa

    const examsBackgroundRef = useRef(null);
    const [examIsActive, setExamIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (servicesSectionRef.current) {
                // Obtém a posição da seção em relação ao topo da página
                const sectionTop = servicesSectionRef.current.getBoundingClientRect().top + window.scrollY;

                // Adiciona ou remove a classe "active" com base na posição de rolagem
                if (window.scrollY >= sectionTop -400) {
                    setIsActive(true);
                } else {
                    setIsActive(false);
                }
            }

            if (examsBackgroundRef.current) {
                // Obtém a posição da seção em relação ao topo da página
                const sectionTop = examsBackgroundRef.current.getBoundingClientRect().top + window.scrollY;

                // Adiciona ou remove a classe "active" com base na posição de rolagem
                if (window.scrollY >= sectionTop -400) {
                    setExamIsActive(true);
                } else {
                    setExamIsActive(false);
                }
            }
        }, 200);

        // Adiciona o evento de rolagem
        window.addEventListener('scroll', handleScroll);

        // Remove o evento de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [courseCardActive, setCourseCardActive] = useState(null);
    const toggleCard = (index) =>{
        setCourseCardActive(courseCardActive === index ? null : index);
    };

    const servicesData = [
        {
            title: 'PRIME KIDS',
            description: '',
            explanation: 'Aprendizado por meio de jogos e músicas, desenvolvendo vocabulário e compreensão auditiva em um ambiente divertido e interativo.'
        },
        {
            title: 'PRIME TEENS',
            description: '',
            explanation: 'Foco em fluência e confiança na comunicação, com debates e atividades interativas que aprimoram a conversação.'
        },
        {
            title: 'PRIME PLUS',
            description: '',
            explanation: 'Aperfeiçoamento da comunicação com discussões, leitura e escrita, preparando os alunos para avançar.'
        },
        {
            title: 'PRIME MASTER',
            description: '',
            explanation: 'Desenvolvimento avançado em comunicação eficaz, com preparação para exames internacionais.'
        },
        {
            title: 'PRIME ESSENTIAL',
            description: '',
            explanation: 'Curso básico para iniciantes, abordando fundamentos essenciais para comunicação cotidiana e uso prático no trabalho.'
        },
        {
            title: 'PRIME INTER',
            description: '',
            explanation: 'Foco no desenvolvimento de habilidades de conversação, escrita e compreensão em contextos mais complexos. Ideal para profissionais que usam inglês no ambiente de trabalho.'
        },
        {
            title: 'PRIME HIGH',
            description: '',
            explanation: 'Curso avançado visando fluência e proficiência, incluindo inglês para negócios e situações profissionais, ideal para maximizar oportunidades de carreira.'
        },
    ];

    return (
        <>

            <section id="services" className="services-section" ref={servicesSectionRef}>
                <div className={`english-courses-container ${isActive ? 'active' : ''}`}>
                    <div className="english-courses-title">
                        <h1>
                            Nossos Cursos
                        </h1>
                        <p>
                            Oferecemos diferentes opções que integram todas as faixas etárias e níveis
                        </p>
                    </div>
                    <div className="english-courses">
                        {servicesData.map((service, index) => (
                            <div
                            key={index}
                            className={`course-card ${courseCardActive === index ? 'course-card-active' : 'course-card-inactive'}`}
                            onClick={() => toggleCard(index)}
                            >
                            <div className="card-text">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>{service.explanation}</p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>
                        ))}


                        {/* <>
                        <div className="course-card">
                            <div className="card-text">
                                <h2>PRIME KIDS</h2>
                                <p></p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>Aprendizado por meio de jogos e músicas, desenvolvendo vocabulário e compreensão auditiva em um ambiente divertido e interativo. </p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>

                        <div className="course-card">
                            <div className="card-text">
                                <h2>PRIME TEENS</h2>
                                <p></p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>Foco em fluência e confiança na comunicação, com debates e atividades interativas que aprimoram a conversação.  </p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>

                        <div className="course-card">
                            <div className="card-text">
                                <h2>PRIME PLUS</h2>
                                <p></p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>Aperfeiçoamento da comunicação com discussões, leitura e escrita, preparando os alunos para avançar. </p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>

                        <div className="course-card">
                            <div className="card-text">
                                <h2>PRIME MASTER</h2>
                                <p></p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>Desenvolvimento avançado em comunicação eficaz, com preparação para exames internacionais. </p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>

                        <div className="course-card">
                            <div className="card-text">
                                <h2>PRIME ESSENTIAL</h2>
                                <p></p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>Curso básico para iniciantes, abordando fundamentos essenciais para comunicação cotidiana e uso prático no trabalho. </p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>

                        <div className="course-card">
                            <div className="card-text">
                                <h2>PRIME INTER</h2>
                                <p></p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>Foco no desenvolvimento de habilidades de conversação, escrita e compreensão em contextos mais complexos. Ideal para profissionais que usam inglês no ambiente de trabalho.  </p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>

                        <div className="course-card">
                            <div className="card-text">
                                <h2>PRIME HIGH</h2>
                                <p></p>
                            </div>
                            <div className="card-text-explanation">
                                <div></div>
                                <p>Curso avançado visando fluência e proficiência, incluindo inglês para negócios e situações profissionais, ideal para maximizar oportunidades de carreira.  </p>
                            </div>
                            <div className="card-cover"></div>
                            <div className="black-card-cover"></div>
                        </div>
                        </> */}
                    </div>
                </div>

                <div className="exams-background" ref={examsBackgroundRef}>

                    <div className="foreground-stars"></div>

                    <div className={`exams-container ${examIsActive ? 'active' : ''}`}>
                        <div className="exams-title">
                            <h1>
                                Exames Internacionais
                            </h1>
                            <p>
                                A PRIME te ajuda na preparação para os exames internacionais mais importantes!
                            </p>
                        </div>

                        <div className="exams">
                            <div className="cambridge">
                                <h3>Cambridge Exams</h3>
                                <p>Preparação para certificações oficiais da Universidade de Cambridge, mundialmente reconhecidas, como FCE, CAE e CPE.
                                    Recomendado para falantes não-nativos que buscam uma certificação de inglês permanente, sem validade.</p>
                            </div>

                            <div className="others-exams">
                                <h3>TOEFL & IELTS</h3>
                                <p>Curso focado em técnicas e estratégias para alcançar altas pontuações nos exames TOEFL e IELTS, aceitos mundialmente.
                                    Para falantes não-nativos que desejam estudar, trabalhar ou imigrar para países de língua inglesa. </p>
                            </div>
                        </div>

                        <div className="CTA-container">
                            <a href="https://wa.me/+5521965147515/?text=Olá! Me interessei sobre os cursos internacionais da PRIME." target="blank" className="CTA-button">QUERO CONHECER </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}