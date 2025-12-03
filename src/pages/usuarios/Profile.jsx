import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

/*
{mensagens.map(mensagem => <Link to="/mensagens/show" className='link-underline link-underline-opacity-0'><li className='list-group-item'> <Mensagem mensagem={mensagem} /></li></Link>)}
*/

const Profile = () => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        const fetchUsuarios = async () => {
            const response = await fetch("http://localhost:3000/api/usuarios");
            const data = await response.json();
            setUsuarios(data);
        }
        fetchUsuarios();
    });
    return (
        <>
            < Navbar />
            {
                (usuarios.length > 0)?
                usuarios.map(usuario =>
                    <div className='mt-5 h-50 w-50 m-auto border rounded'>
                        <h1 className="text-center" id="nome">Usuario:{usuario.nome}</h1>
                        <p className="text-center fs-1" id="idDoPerfil">Id:{usuario.id}</p>
                    </div>):<h2 className='fs-1 text-center mt-5'>Nenhum usuário encontrado!</h2>
            }
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default Profile