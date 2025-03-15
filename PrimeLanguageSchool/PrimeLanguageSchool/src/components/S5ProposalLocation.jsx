import "./S5ProposalLocation.scss";
import ScrollSection, { ScrollSectionContext } from "./ScrollSection";
import React, {useContext} from "react";

export default function S5ProposalLocation() {

    return (
        <>
            <ScrollSection id={"location"} sectionClassName={"proposal-location-section"} enterPosition={0.5} exitPosition={0.6}>
                <Content />
            </ScrollSection>
        </>
    )

    function Content(){
        const sectionActive = useContext(ScrollSectionContext);
    
        return(
            <>
            <div className="proposal-background">
                        <div className="foreground-stars"></div>
                        
                        <div className={`proposal-container ${sectionActive ? 'proposal-container-active' : ''}`}>
                            
                            <div className="proposal-text-container">
                                <div className="proposal-text">
                                    <h1>Torne-se PRIME</h1>
                                    <div className="proposal-text-item-container">
                                        <div className="proposal-text-item">
                                            <h3>- Aulas online e presenciais</h3>
                                            <p>Flexibilidade para aprender ao vivo no seu ambiente preferido.</p>
                                        </div>
                                        <div className="proposal-text-item">
                                            <h3>- Aulas vip</h3>
                                            <p>Experiência personalizada exclusiva, adaptada às suas necessidades.</p>
                                        </div>
                                        <div className="proposal-text-item">
                                            <h3>- Aulas em Turmas</h3>
                                            <p>Grupos com no máximo 5 alunos. Máximo progresso com atendimento individual e eficaz.</p>
                                        </div>
                                    </div>
                                    <div className="CTA-container">
                                        <a href="https://wa.me/+5521965147515/?text=Olá. Quero saber mais sobre as aulas!" target="blank" className="CTA-button">QUERO CONHECER </a>
                                    </div>
                                </div>
                            </div>
    
                            <div className="proposal-image"></div>
                        </div>
                    </div>
    
                    <div className="location-background">
                        <div className="location-elipse"></div>
                        <div className="location">
                            <div className="location-informations">
                                <div className="location-icon"></div>
                                <div className="location-text">
                                    <h2>Localização e Contato</h2>
                                    <p>R. Francisco Sá, 38 - Loja B - Copacabana, Rio de Janeiro - RJ, 22080-010</p>
                                    <p>Tel.: (21) 96514-7515</p>
                                </div>
                            </div>
                            <div className="location-map">
                                <a className="map" href="https://www.google.com/maps/place/Prime+Language+School/@-22.9830217,-43.1941098,17z/data=!3m1!4b1!4m6!3m5!1s0x9bd53c5e99f93d:0x87dee3db96d9f8f9!8m2!3d-22.9830267!4d-43.1915349!16s%2Fg%2F11w4tpzgfc?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target="blank"></a>
                            </div>
                        </div>
                    </div>
                    </>
        );
    }
}