import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Login = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-center'>Entrar</h1>
            <div className='w-75 m-auto mt-2'>
                <form>
                    <div className='form-floating mb-3 border border-secondary rounded'>
                        <input type="email" className='form-control' name="email" id="email" placeholder='name@example.com'/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className='form-floating mb-3 border border-secondary rounded'>
                        <input type="password" name="senha" id="senha" className='form-control' placeholder='Password'/>
                        <label htmlFor="senha">Senha</label>
                    </div>
                        <button type="submit" className='btn btn-lg btn-success w-100'>Entrar</button>
                </form>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0"><Footer/></div>
        </>
    )
}

export default Login
