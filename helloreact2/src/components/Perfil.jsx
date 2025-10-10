import { useState } from "react";

const AlteraNome = ( {setNomeState} ) => {
    return (
        <div className="border border-dark rounded mt-2 p-2">
            <label htmlFor="id-input-nome">Trocar o nome do perfil</label>
            <input id="id-input-nome" type="text" />
        </div>
    )
}

const Perfil = ({ nome, descricao }) => {
    const [nomeState, setNomeState] = useState("");
    const [descState, setDescState] = useState("");
    const [showDesc, setShowDesc] = useState(true);
    const imgUrl = "https://www.freeiconspng.com/uploads/profile-icon-9.png";
    const descButtonClick = () => {
        setShowDesc(!showDesc);
    }
    return (
        <div className="border border-dark rounded m-2 p-2">
            <h1>Perfil</h1>
            <h2>{nome}</h2>
            <img src={imgUrl} width={100} alt="Foto de Perfil" />
            <p className={showDesc ? "visible" : "invisible"} >{descricao}</p>
            {/* <p style={ showDesc ? {visibility: "visible"} : {visibility: "hidden"} } >{descricao}</p> */}
            {/* {showDesc && <p>{descricao}</p>} */}
            <div>
                <button onClick={descButtonClick} className="btn btn-primary">Mostrar/Ocultar</button>
            </div>
            <AlteraNome setNomeState={setNomeState} />
        </div>
    )
}

export default Perfil