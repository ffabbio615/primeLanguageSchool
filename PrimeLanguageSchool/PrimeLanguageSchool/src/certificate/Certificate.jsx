import './Certificate.scss';
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';


export default function Certificate({name, cpf, course, beginDate, endDate, hours, level}){

    function getTodayDate(){
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const monthName = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const year = today.getFullYear();
        return(`Rio de Janeiro, ${day} de ${monthName[month]} de ${year}.`);
    }

    function formatedDate(date){
        const [year, month] = date.split("-");
        return (`${month}/${year}`);
    }

    const handlePrint = () => {
        window.print(); // Abre o diálogo de impressão
    };

    return(
        <main>
            <button onClick={handlePrint} className='btn-pdf-save'></button>
            <div className='certificate-container'>
                <div className='certificate-background'></div>
                <div className='red-triangles-container'>
                    <div className='triangles'>
                        <div className='red-t1'></div>
                        <div className='red-t2'></div>
                        <div className='red-t3'></div>

                        <div className='certificate-container-logo'>
                        <div className='certificate-logo'></div>
                        <p className='cnpj'>CNPJ: 55.387.913/0001-02</p>
                    </div>
                    </div>
                </div>
                <div className='watermark'></div>
                <div className='watermark-colored'></div>
                <div className='blue-border'></div>

                <div className='certificate-data-container'>
                    <div className='certificate-title-container'>
                        <h1 className='certificate-data-title'>Certificado</h1>
                        <p className='certificate-description'>Certificamos que</p>
                    </div>
                    <p className='certificate-description student-description'><strong>{name}</strong>, portador do CPF <strong>{cpf}</strong></p>
                    <p className='certificate-description'>Concluiu o curso</p>
                    <h2 className='course-title'>{course}</h2>
                    <p className='certificate-description course-description'>Ministrado no período entre <strong>{formatedDate(beginDate)}</strong> e <strong>{formatedDate(endDate)}</strong>
                    , totalizando a carga horária de <strong>{hours}</strong> horas
                        de estudo, tendo alcançado o nível <strong>{level}</strong> .
                    </p>
                    <p className='certificate-description todays-date'>{getTodayDate()}</p>
                    <div className='signature-container'>
                        <div className='signature'></div>
                        <p className='certificate-description principals-signature-text'><strong>________________________________________</strong></p>
                        <p className='certificate-description principals-signature-text'><strong>Alexandre Mello</strong></p>
                        <p className='certificate-description principals-signature-text'>Diretor</p>
                    </div>
                </div>
            </div>
        </main>
    );

}