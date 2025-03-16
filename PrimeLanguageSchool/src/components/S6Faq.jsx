import React, { useState, useRef, useEffect } from "react";
import "./S6Faq.scss";

export default function S6Faq(){

    const faqData = [
        {
            question: 'Como funcionam as aulas VIP?',
            answer: 'As aulas VIP são personalizadas de acordo com suas necessidades e objetivos. O professor irá focar em todas as suas áreas de interesse.'
        },
        {
            question: 'Quais são os benefícios das aulas em grupo?',
            answer: 'As aulas em grupo permitem interação com outros alunos, prática de habilidades de comunicação em situações reais e trocas culturais. Também são uma opção mais econômica em comparação com as aulas VIP e contam com no máximo 5 alunos.'
        },
        {
            question: 'Como é o curso preparatório para exames?',
            answer: 'É focado nas habilidades e estratégias necessárias para alcançar uma boa pontuação no exame desejado. Inclui professor especializado, prática com testes simulados, exercícios específicos e feedback dos professores.'
        },
        {
            question: 'A PRIME oferece auditoria linguística?',
            answer: 'Sim! A auditoria linguística é um serviço que avalia a proficiência linguística dos colaboradores de uma empresa. Identificamos as necessidades de treinamento e ajudamos a desenvolver programas de desenvolvimento linguístico personalizados.'
        },
        {
            question: 'Como a auditoria linguística pode beneficiar minha empresa?',
            answer: 'A auditoria ajuda a identificar áreas de melhoria na comunicação em inglês, melhora a eficácia da comunicação interna e externa e pode aumentar a competitividade da sua empresa em mercados globais.'
        },
        {
            question: 'Na PRIME só há cursos de inglês?',
            answer: 'Não. Oferecemos também cursos de espanhol e português para estrangeiros, e todos eles com a mesma metodologia e modalidade de aulas.'
        },
        {
            question: 'Como posso me inscrever em um curso?',
            answer: 'Basta nos enviar uma mensagem por e-mail ou WhatsApp. Vamos direcioná-lo para um bate-papo de alinhamento de necessidades e objetivos e, se necessário, um teste de nível. Logo após, enviaremos a proposta contendo o diagnóstico e o plano de estudos.'
        },
        {
            question: 'Quais são as formas de pagamento aceitas?',
            answer: 'Aceitamos pagamentos via Cartão de crédito, com parcelamento sem juros, Boleto bancário e Pix.'
        },
        {
            question: 'Os alunos recebem algum certificado?',
            answer: 'Sim, ao concluir qualquer um dos nossos cursos ou módulos regulares, você receberá um certificado de conclusão.'
        },
        {
            question: 'Terei algum material didático nos cursos?',
            answer: 'Sim. Além do material exclusivo da PRIME, para o melhor aproveitamento de nossos alunos, adotamos materiais didáticos da Cambridge University Press. O aluno terá acesso à plataforma digital, contendo livros e diversos outros recursos.'
        },
    ];

    const faqSectionRef = useRef(null);
    const [questionBoxActive, setQuestionBoxActive] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if(faqSectionRef.current){
                const sectionTop = faqSectionRef.current.getBoundingClientRect().top + window.scrollY;

                if (window.scrollY >= sectionTop -400) {
                    setQuestionBoxActive(true);
                } else {
                    setQuestionBoxActive(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    });



    const [activeIndex, setActiveIndex] = useState(null);
    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };



    return (
        <>
        <section id="FAQ" className="faq-section" ref={faqSectionRef}>
            <div className="faq-group">
                <h1 className={`${questionBoxActive ? 'question-box-active' : 'question-box-inactive'}`}> Dúvidas Frequentes</h1>

                <div className="question-box-group">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`question-box ${activeIndex === index ? "question-box-opened" : ""} ${questionBoxActive ? 'question-box-active' : 'question-box-inactive'}`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className="text-question">
                                <p>{faq.question}</p>
                                <div className="arrow-box">▼</div>
                            </div>
                            <div className="text-answer">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}