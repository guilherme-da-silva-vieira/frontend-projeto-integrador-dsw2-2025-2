import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Alert from "../../util/Alert"

const Login = () => {
    const [entrada, setEntrada] = useState({
        email:"",
        senha:"",
    });
    const digitando = (e) =>{
        const {name, value} = e.target;
        setEntrada((prev) => ({
                ...prev,
                [name]:value,
            }));
    }
    const auth = useAuth();
    const quandoEnviar = (e) =>{
        e.preventDefault();
        if(entrada.email != "" && entrada.senha != ""){
            auth.loginAction(entrada);
        }
        else{
            Alert("campoalert","warning","E-Mail e senha devem ser incluídos!");
        }
    }
    return (
        <>
            <Navbar />
            <div id="campoalert"></div>
            <h1 className='text-center'>Entrar</h1>
            <div className='w-75 m-auto mt-2'>
                <form onSubmit={quandoEnviar}>
                    <div className='form-floating mb-3 border border-secondary rounded'>
                        <input type="email" className='form-control' name="email" id="email" placeholder='name@example.com' onChange={digitando}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='form-floating mb-3 border border-secondary rounded'>
                        <input type="password" name="senha" id="senha" className='form-control' placeholder='Password' onChange={digitando}/>
                        <label htmlFor="senha">Senha</label>
                    </div>
                        <button type="submit" className='btn btn-lg btn-success w-100'>Entrar</button>
                </form>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0"><Footer/></div>
            <div className="text-center">
                <p className="fs-1 mt-5">Novo por aqui? <Link className="text-primary" to="/usuarios/register">Cadastrar aqui!</Link></p>
            </div>
        </>
    )
}

export default Login
