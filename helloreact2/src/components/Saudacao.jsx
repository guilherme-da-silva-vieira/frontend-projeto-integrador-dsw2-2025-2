const Saudacao = ({ nome }) => {
    return (
        <div className="border border-dark rounded p-2 m-2">
            <h1>Saudacao</h1>
            <p>Olá, {nome}. Seja bem vindo(a).</p>
            <p>Hoje é dia {new Date().toLocaleDateString()}</p>
        </div>
    )
}
export default Saudacao