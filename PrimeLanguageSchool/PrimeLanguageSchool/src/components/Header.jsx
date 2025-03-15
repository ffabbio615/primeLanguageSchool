import './Header.scss'

export default function Header() {
    return (
        <>
            <div className='whatsapp-container'>
                <a href="https://wa.me/+5521965147515/?text=Olá! Desejo mais informações sobre a PRIME." target="blank" className='whatsapp-icon'></a>
            </div>
            
            <header className='header' id='header'>
                <div className='social-media'>
                    <a href='https://www.instagram.com/primelanguageschoolrj/profilecard/?igsh=cWJjYzZza3BhcnUx' target='blank' className='social-media-instagram'></a>
                    <a href='https://www.facebook.com/share/15MjuFpGF3/?mibextid=LQQJ4d' target='blank' className='social-media-facebook'></a>
                </div>

                <div className='header-menu'>
                    <div className='header-menu-logo'><div className='header-logo'></div></div>

                    <div className='header-links'>
                        <a href='#presentation'>Sobre nós</a>
                        <a href='#services'>Cursos</a>
                        <a href='#location'>Unidade</a>
                        <a href='#FAQ'>FAQ</a>
                    </div>

                    <div className='header-student-button'>
                        <a href='https://portal.sponteweb.com.br/SelecionaLogin.aspx?cid=488282' target='blank' className='student-button'>ÁREA DO ALUNO</a>
                    </div>
                </div>
            </header>
        </>
    )
}