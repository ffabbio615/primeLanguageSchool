import { useState, useEffect } from 'react';
import './CertificateLogin.scss';
import CertificateForm from "./CertificateForm";
import { auth } from '../firebase/config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default function CertificateLogin(){

    const [userCredentials, setUserCredentials] = useState({});

    function handleCredentials(e){
            setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
    }
    
    const [login, setLogin] = useState(false);

    const [loader, setLoader] = useState(true);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            if(userCredentials.email !== '' && userCredentials.email !== undefined && userCredentials.password !== '' && userCredentials.password !== undefined){
                handleLogin(event);
            }else{
                return;
            }
        }
    };

    function handleLogin(e){
        e.preventDefault();
        setLoader(true);
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setLogin(true);
            //Página após login
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log("Error code: " + error.code);
            switch(errorCode){
                case "auth/invalid-credential":
                    alert("Usuário não encontrado. Verifique se digitou corretamente e tente novamente.");
                break;
                case "auth/missing-password":
                    alert("Senha incorreta. Tente novamente.");
                break;
                case "auth/invalid-email":
                    alert("E-mail não encontrado. Verifique se digitou corretamente.");
                break;
                case "auth/user-disabled":
                    alert("Sua conta foi desativada. Entre em contato com o suporte para mais informações.");
                break;
                default:
                    alert("Erro ao fazer login. Tente novamente mais tarde.");
            }
            setLoader(false);
        });
    }

    function handleSignOut(){
        setLoader(true);
        if (confirm("Tem certeza que deseja sair?")){
            signOut(auth).then(() => {
                // Sign-out successful.
            }).catch((error) => {
                alert("Ocorreu algum erro ao tentar sair. Recarregue a página e tente novamente.")
                // An error happened.
            });
            setLoader(false);
        }
    }

    function handlePasswordReset(){

        if(document.querySelector('#email').value !== ''){
            sendPasswordResetEmail(auth, userCredentials.email);
            alert("E-mail de recuperação enviado! Verifique sua caixa de entrada e siga as instruções para alterar a senha."); 
        }
        else{
            alert("Preencha seu e-mail corretamente!"); 
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                setLogin(true);
            } else {
                setLogin(false);
            }
            setLoader(false); // Desativa o loader após verificação
        });

        return () => unsubscribe(); // Cleanup na desmontagem
    }, []);
    
    return(
        <>
            { loader ?
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
                : null
            }
            {!login ? 
                <div onKeyDown={handleKeyDown} className="login-container">
                    <div className="login">
                        <div className='header-login-icon'><div className='login-icon'></div></div>
                        <div className="icon"><div className='user-icon'></div></div>
                        <input onChange={(e) => {handleCredentials(e)}} type="text" id='email' name='email' placeholder="E-mail"/>
                        <div className="icon password-container"><div className='password-icon'></div></div>
                        <input onChange={(e) => {handleCredentials(e)}} type="password" id='password' name='password' placeholder="Senha"/>
                        <button onClick={(e) => handleLogin(e)} className="btn-login btn-access">Acessar</button>
                        <button onClick={handlePasswordReset} className="btn-login">Esqueci a Senha</button>
                        <p className='version-observation'>*Versão mobile somente para recuperação de senha.</p>
                    </div>
                    <div className="prime-logo-background"></div>
                </div>
                :
                <>
                    <button onClick={handleSignOut} className='btn-log-out'>Logout</button>
                    <CertificateForm />
                </>
            }
        </>
    )


}