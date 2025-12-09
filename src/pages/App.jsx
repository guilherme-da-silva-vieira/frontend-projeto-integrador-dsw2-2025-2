// src/App.jsx

import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const App = () => {
    return (
        <>
            <Navbar />
            <div className="row m-2 g-5">
                <h1 className="text-center">Bem Vindo ao PAPOTALK<sup>&reg;</sup>, seu aplicativo de mensagens!</h1>
                <div className="col-6 border rounded">
                    <div className="h-50 w-25 m-auto">
                        <h2 className="text-center">Acessar suas mensagens:</h2>
                        <p className="text-center"><Link to="/usuarios/login" className="btn btn-lg btn-primary">Fazer Login</Link></p>
                    </div>
                </div>
                <div className="col-6 border rounded">
                    <div className="h-50 w-25 m-auto">
                        <h2 className="text-center">Primeira vez aqui?</h2>
                        <p className="text-center"><Link to="/usuarios/register" className="btn btn-lg btn-primary">Cadastrar</Link></p>
                    </div>
                </div>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0">
                <Footer />
            </div>
        </>
    )
}
export default App