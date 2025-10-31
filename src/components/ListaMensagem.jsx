import React from 'react'
import Mensagem from './Mensagem';
import { Link } from 'react-router-dom';

const ListaMensagem = () => {
    const [mensagens, setMensagens] = React.useState([]);
    // habilitando o useEffect para apis(não funcionando de maneira imediata, somente depois da primeira pintura)
    React.useEffect(() => {
        // função async pois precisará do await
        const fetchMensagens = async () => {
            const response = await fetch("http://localhost:3000/api/mensagens");
            const data = await response.json(); // conversão dos dados para json
            // console.log(data);
            setMensagens(data);//redesenhando o render
        }
        fetchMensagens();
    }, []);// o colchete vazio irá apresentar que será executado depois do primeiro render

    return (
        <>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-body-secondary">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-body-secondary">And some muted small print.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">List group item heading</h5>
                        <small className="text-body-secondary">3 days ago</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-body-secondary">And some muted small print.</small>
                </a>
            </div>
            <div className='my-5'>
                <ul className='list-group'>
                    {mensagens.map(mensagem => <Link to="/mensagens/show" className='link-underline link-underline-opacity-0'><li key={mensagem.id} className='list-group-item'> <Mensagem mensagem={mensagem} /></li></Link>)}
                </ul>
            </div>
            <div className='row'>
                {mensagens.map(mensagem =>
                    <div className='col-lg-6 col-12'>
                        <div className="card text-center my-1" key={mensagem.id}>
                        <div className="card-header">
                            {mensagem.Usuarios_id}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{mensagem.id}</h5>
                            <p className="card-text">{mensagem.mensagem}</p>
                            <button className='btn btn-secondary'>Ativo</button>
                            <button className='btn btn-info'>Editar</button>
                            <button className='btn btn-danger'>Excluir</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {mensagem.Usuarios_id_destinatario}
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ListaMensagem