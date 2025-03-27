import React, {useState, useEffect, useRef} from "react";
import './CertificateForm.scss';
import Certificate from "./Certificate";
import Inputmask from "inputmask";

export default function CertificateForm(){

    function showPicker(id)
    {
        const date = document.querySelector(`#${id}`);
        date.showPicker();
    }

    const [student, setStudent] = useState(
        {
            name:'',
            cpf:'',
            course:'',
            beginDate:'',
            endDate:'',
            hours:'',
            level:''
        }
    );

    function validateFields(){
        const name = document.querySelector("#name").value;
        const cpf = document.querySelector("#cpf").value;
        const course = document.querySelector("#course").value;
        const beginDate = document.querySelector("#begin-date").value;
        const endDate = document.querySelector("#end-date").value;
        const hours = document.querySelector("#hours").value;
        const level = document.querySelector("#level").value;

        if(name && cpf && beginDate && endDate !=='' && course !=="SELECIONE O CURSO" && level !== 'SELECIONE O NÍVEL')
        {
            setStudent(
                {
                    name,
                    cpf,
                    course,
                    beginDate,
                    endDate,
                    hours,
                    level
                }
            );
        }
        else{
            alert("Preencha todos os campos corretamente.");
        }
    }

    function countHours(){
        let beginDate = new Date(document.querySelector("#begin-date").value);
        let endDate = new Date(document.querySelector("#end-date").value);
        
        if(beginDate && endDate !== ''){
            const totalHours = (endDate.getFullYear() - beginDate.getFullYear()) * 12 + (endDate.getMonth() - beginDate.getMonth());
            document.querySelector("#hours").value = totalHours * 8;
        }
    }

    const cpfRef = useRef(null);
    useEffect(() => {
        // Aplica a máscara de CPF diretamente ao campo de input
        const mask = new Inputmask("999.999.999-99");
        mask.mask(cpfRef.current);
      }, []);

    return(
        <>
        { student.name === '' ?
            <div className="certificate-container">
                <h1 className="certificate-form-title">Gerador de Certificados</h1>
                <div className="certificate-form-container">
                    <div className="form">
                        <div>
                            <label htmlFor="name">Nome do Aluno:</label>
                            <input type="text" id="name" autoComplete="off" placeholder="Ex.: Alexandre Mello" />
                        </div>

                        <div>
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" id="cpf" ref={cpfRef} autoComplete="off" placeholder="Somente números" />
                        </div>

                        <div>
                            <label htmlFor="course">Curso:</label>
                            <select name="course" id="course">
                                <option defaultValue="select">SELECIONE O CURSO</option>
                                <option defaultValue="kids">PRIME KIDS</option>
                                <option defaultValue="teens">PRIME TEENS</option>
                                <option defaultValue="plus">PRIME PLUS</option>
                                <option defaultValue="master">PRIME MASTER</option>
                                <option defaultValue="essential">PRIME ESSENTIAL</option>
                                <option defaultValue="inter">PRIME INTER</option>
                                <option defaultValue="high">PRIME HIGH</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="begin-date">Selecione mês e ano iniciais:</label>
                            <input onClick={() => showPicker("begin-date")}  type="month" id="begin-date" />
                        </div>

                        <div>
                            <label htmlFor="end-date">Selecione mês e ano finais:</label>
                            <input onClick={() => showPicker("end-date")} onChange={countHours} type="month" id="end-date" />
                        </div>

                        <div>
                            <label htmlFor="hours">Carga horária:</label>
                            <input type="text" id="hours" disabled placeholder="-" />
                        </div>

                        <div>
                            <label htmlFor="level">Nível do aluno:</label>
                            <select name="level" id="level">
                                <option defaultValue="a1">SELECIONE O NÍVEL</option>
                                <option defaultValue="a1">A1</option>
                                <option defaultValue="a2">A2</option>
                                <option defaultValue="b1">B1</option>
                                <option defaultValue="b2">B2</option>
                                {/* <option value="c1">C1</option>
                                <option value="c2">C2</option> */}
                            </select>
                        </div>
                        
                        <button onClick={validateFields}>Gerar Certificado</button>
                    </div>
                </div>
            </div>
            : 
            <Certificate 
                name={student.name}
                cpf={student.cpf}
                course={student.course}
                beginDate={student.beginDate}
                endDate={student.endDate}
                hours={student.hours}
                level={student.level}
            />
        }
        </>
    )
}