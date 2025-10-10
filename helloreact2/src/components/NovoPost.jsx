// src/components/NovoPost.jsx
import { useState } from "react";
const Like = ({ curtidas, onCurtir }) => {
    return <button
        className="btn btn-info"
        onClick={onCurtir}>👍 {curtidas}
    </button>;
}
const Post = ({ texto }) => {
    const [curtidas, setCurtidas] = useState(0);
    const curtir = (e) => {
        e.preventDefault();
        setCurtidas(curtidas + 1);
    }
    return (
        <div
            className="border border-dark rounded my-2 p-2"
        >
            <p className="m-0">{texto}</p>
            <Like curtidas={curtidas} onCurtir={curtir} />
        </div>
    )
}
const NovoPost = () => {
    const [texto, setTexto] = useState("");
    const [posts, setPosts] = useState([]);

    const publicar = (e) => {
        e.preventDefault();
        if (!texto.trim()) return;
        // posts.push(texto); // Problema

        //   Essa próxima operação substitui o valor do estado posts
        // por um array novo.
        // O operador ... é o spread operator
        //   O spead operator está sendo usado para pegar tudo que
        // tinha no array anterior e colocar nas primeiras posições.
        setPosts([...posts, texto]);
        setTexto("");
    }
    return (
        <div className="border border-dark rounded m-2 p-2">
            <h1>NovoPost</h1>
            <form onSubmit={publicar}>
                <textarea
                    className="form-control"
                    rows="4" value={texto}
                    onChange={e => setTexto(e.target.value)}
                />
                <div className="my-2">
                    <button className="btn btn-primary" type="submit">Publicar</button>
                </div>
            </form>
            {
                posts.map(texto =>
                    <Post texto={texto} />
                )
            }
        </div>
    )
}
export default NovoPost