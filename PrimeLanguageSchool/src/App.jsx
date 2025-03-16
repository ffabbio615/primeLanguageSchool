import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import S1Proposal from './components/S1Proposal';
import S2Presentation from './components/S2Presentation';
import S3Services from './components/S3Services';
import S4Testimonials from './components/S4Testimonials';
import S5ProposalLocation from './components/S5ProposalLocation';
import S6Faq from './components/S6Faq';
import Footer from './components/footer';
import CertificateLogin from './certificate/CertificateLogin';

function App() {

  //RECEBE O TAMANHO INTERNO NO NAVEGADOR E ADICIONA A VARIÁVEL CSS
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
          element={
            <>
            <Header/>
            <S1Proposal/>
            <S2Presentation/>
            <S3Services/>
            <S4Testimonials/>
            <S5ProposalLocation/>
            <S6Faq/>
            <Footer/>
            </>}
          />

          <Route path='/certificados' element={<CertificateLogin/>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App
