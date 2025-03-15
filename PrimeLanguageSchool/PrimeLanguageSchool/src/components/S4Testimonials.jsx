import "./S4Testimonials.scss";

export default function S4Testimonials() {

const testimonialsData = [

    { 
        testimonial: '"Sou aluno da Prime Language School e estou adorando as aulas online! 🎉 As aulas são super flexíveis, posso estudar no meu próprio ritmo e horário.' + 
        ' Os professores são incríveis e sempre prontos para ajudar. 👩‍🏫👨‍🏫"',
        personName: 'Wado Lobo',
    },
    { 
        testimonial: '"Minha jornada Prime School tem sido incrível. As aulas de conversação são o ponto alto para mim.' +
        ' A quantidade de prática que temos é excelente, e o fato de as turmas serem reduzidas facilita muito' +
        ' a participação dos alunos adultos. Muito obrigado por essa experiência enriquecedora!"',
        personName: 'Anthony Oliveira',
    },
    { 
        testimonial: '"Maravilhoso. O ambiente. O local. O professor. Tudo..eu amo..estou lá praticamente todos os dias. ' +
        'Tem melhorado meu inglês e nas viagens q faço internacionais, as pessoas me elogiam. Agora quero fazer minha 3 língua."',
        personName: 'Lynda Del Santo',
    },
    { 
        testimonial: '"(...) As salas de estudo são confortáveis, o ambiente tranquilo e os professores muito experientes e dedicados.' +
        ' Foge do lugar comum, daquela opressiva formalidade que encontrei em outros cursos, apresentando um estilo inovador e dinâmico, focado no objetivo pretendido pelo aluno."',
        personName: 'Jorge Mello',
    }
];

const testimonialsLink = 'https://www.google.com/search?sca_esv=dcbcef83952848e4&cs=0&output=search&kgmid=/g/11w4tpzgfc&q=Prime+Language+School&shndl=30&source=sh/x/loc/uni/m1/1&kgs=cdca6df0228fce36#lrd=0x9bd53c5e99f93d:0x87dee3db96d9f8f9,1,,,,';

    return (
        <>
            <section className="testimonials-section">

                <h1>Depoimentos</h1>

                <div className="testimonials-group">
                    {
                        testimonialsData.map((testimonial, index) =>(
                        <a key={index} href={testimonialsLink} className="testimonials-card">
                            <div className="testimonial">
                                <div className="prime-testimonial-icon"><div></div></div>
                                <p>{testimonial.testimonial}</p>
                            </div>
                            <div className="testimonial-name">{testimonial.personName}</div>
                        </a>
                    ))}

                    {/* <>
                    <a href="https://www.google.com/search?sca_esv=dcbcef83952848e4&cs=0&output=search&kgmid=/g/11w4tpzgfc&q=Prime+Language+School&shndl=30&source=sh/x/loc/uni/m1/1&kgs=cdca6df0228fce36#lrd=0x9bd53c5e99f93d:0x87dee3db96d9f8f9,1,,,," className="testimonials-card">
                        <div className="testimonial">
                            <div className="prime-testimonial-icon"><div></div></div>
                            <p> "Sou aluno da Prime Language School e estou adorando as aulas online! 🎉 As aulas são super flexíveis, posso estudar no meu próprio ritmo e horário. Os professores são incríveis e sempre prontos para ajudar. 👩‍🏫👨‍🏫"</p>
                        </div>
                        <div className="testimonial-name">
                            Wado Lobo
                        </div>
                    </a>

                    <a href="https://www.google.com/search?sca_esv=dcbcef83952848e4&cs=0&output=search&kgmid=/g/11w4tpzgfc&q=Prime+Language+School&shndl=30&source=sh/x/loc/uni/m1/1&kgs=cdca6df0228fce36#lrd=0x9bd53c5e99f93d:0x87dee3db96d9f8f9,1,,,," className="testimonials-card">
                        <div className="testimonial">
                            <div className="prime-testimonial-icon"><div></div></div>
                            <p> "Minha jornada Prime School tem sido incrível. As aulas de conversação são o ponto alto para mim.
                                A quantidade de prática que temos é excelente, e o fato de as turmas serem reduzidas facilita muito
                                a participação dos alunos adultos. Muito obrigado por essa experiência enriquecedora!"</p>
                        </div>
                        <div className="testimonial-name">
                            Anthony Oliveira
                        </div>
                    </a>

                    <a href="https://www.google.com/search?sca_esv=dcbcef83952848e4&cs=0&output=search&kgmid=/g/11w4tpzgfc&q=Prime+Language+School&shndl=30&source=sh/x/loc/uni/m1/1&kgs=cdca6df0228fce36#lrd=0x9bd53c5e99f93d:0x87dee3db96d9f8f9,1,,,," className="testimonials-card">
                        <div className="testimonial">
                            <div className="prime-testimonial-icon"><div></div></div>
                            <p> "Maravilhoso. O ambiente. O local. O professor. Tudo..eu amo..estou lá praticamente todos os dias. Tem melhorado meu inglês e nas viagens q faço internacionais, as pessoas me elogiam.
                                Agora quero fazer minha 3 língua."</p>
                        </div>
                        <div className="testimonial-name">
                            Lynda Del Santo
                        </div>
                    </a>

                    <a href="https://www.google.com/search?sca_esv=dcbcef83952848e4&cs=0&output=search&kgmid=/g/11w4tpzgfc&q=Prime+Language+School&shndl=30&source=sh/x/loc/uni/m1/1&kgs=cdca6df0228fce36#lrd=0x9bd53c5e99f93d:0x87dee3db96d9f8f9,1,,,," className="testimonials-card">
                        <div className="testimonial">
                            <div className="prime-testimonial-icon"><div></div></div>
                            <p className="third-testimonial"> "(...) As salas de estudo são confortáveis, o ambiente tranquilo e os professores muito experientes e dedicados.
                                Foge do lugar comum, daquela opressiva formalidade que encontrei em outros cursos, apresentando um estilo
                                inovador e dinâmico, focado no objetivo pretendido pelo aluno."</p>
                        </div>
                        <div className="testimonial-name">
                            Jorge Mello
                        </div>
                    </a>
                    </> */}

                </div>

            </section>

        </>
    )
}