import { useState } from 'react'
const Contador = () => {
    const [valor, setValor] = useState(0); // Criando um estado
    const [passo, setPasso] = useState(1);
    const diminuir = () => {
        setValor(valor - passo);
    }
    const incrementar = () => {
        setValor(valor + passo);
    }
    return (
        <div className="border border-dark rounded m-2 p-2">
            <h1>Contador</h1>
            <div className='d-flex gap-2'>
                <button style={{ width: "40px" }} className='btn btn-outline-danger' onClick={diminuir}>-</button>
                <span className='my-auto'>{valor}</span>
                <button style={{ width: "40px" }} className='btn btn-outline-success' onClick={incrementar}>+</button>
                <span className='my-auto'>Passo:</span>
                <input
                    type="number"
                    className="form-control"
                    value={passo}
                    onChange={(e) => setPasso(Number(e.target.value))}
                />
            </div>
        </div>
    )
}
export default Contador