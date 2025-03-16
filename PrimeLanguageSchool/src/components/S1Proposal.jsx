import "./S1Proposal.scss";

export default function S1Proposal() {
    return (
        <>

            <section className="proposal-section">

                <div className="proposal-background">
                    <div className="foreground-stars"></div>
                    <div className="proposal">
                        <div className="proposal-text">
                            <h1>Seja fluente, seja PRIME. Inglês que abre portas!</h1>
                            <p>Na PRIME Language School, nosso foco é sua fluência. Aprenda no seu ritmo e esteja preparado para qualquer desafio!</p>
                            <div className="proposal-image-mobile"></div>
                            <div className="CTA-container">
                                <a href="https://wa.me/+5521965147515/?text=Olá! Desejo mais informações sobre a PRIME." target="blank"><button className="CTA-button">QUERO CONHECER</button></a>
                            </div>
                        </div>
                        <div className="proposal-image"></div>
                    </div>
                </div>


                <div className="methodology-background">
                    <div className="methodology-elipse"></div>
                    <div className="methodology">
                        <h3>Aprenda no seu ritmo: presencial ou online, você escolhe!</h3>
                        <p>Na Prime Language School, oferecemos aulas ao vivo que se encaixam perfeitamente a sua rotina.
                            Seja presencialmente em nossa unidade ou online via videochamadas, você aprende de forma dinâmica e personalizada.
                            Flexibilidade e resultados garantidos, do jeito que você precisa.</p>
                        <div className="methodology-image"></div>
                    </div>

                </div>
            </section>

        </>
    )
}