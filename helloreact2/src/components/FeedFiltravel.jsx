// src/components/FeedFiltravel.jsx
import { useState } from "react";
const FiltroAutor = ({ usuarioTermoState, setUsuarioTermoState }) => {
    return (
        <div className="d-flex gap-2 border border-dark rounded m-2 p-2">
            <label
                htmlFor="id-input-autor"
                className="form-label text-nowrap my-auto"
            >
                Filtro de autor
            </label>
            <input
                className="form-control"
                id="id-input-autor"
                placeholder="Filtrar por autor..."
                value={usuarioTermoState}
                onChange={e => setUsuarioTermoState(e.target.value)}
            />
        </div>
    )
}
const FiltroConteudo = ({ conteudoTermoState, setConteudoTermoState }) => {
    return (
        <div className="d-flex gap-2 border border-dark rounded m-2 p-2">
            <label
                htmlFor="id-input-autor"
                className="form-label text-nowrap my-auto"
            >
                Filtro de conteúdo
            </label>
            <input
                className="form-control"
                id="id-input-autor"
                placeholder="Filtrar por autor..."
                value={conteudoTermoState}
                onChange={e => setConteudoTermoState(e.target.value)}
            />
        </div>
    )
}
const Lista = ({ posts, usuarioTermoState, conteudoTermoState }) => {
    // filter é feito em um array e resulta um array
    // esse array terá os elementos que passaram no filtro
    const filtro = posts.filter(post =>
        post.autor.toLowerCase().includes(usuarioTermoState.toLowerCase())
    ).filter(post =>
        post.texto.toLowerCase().includes(conteudoTermoState.toLowerCase())
    );
    return filtro.map(post =>
        <div key={post.id} className="border border-dark rounded m-2 p-2">
            <div><strong>{post.autor}</strong></div>
            <div>{post.texto}</div>
        </div>);
}
const FeedFiltravel = () => {
    const [usuarioTermoState, setUsuarioTermoState] = useState("");
    const [conteudoTermoState, setConteudoTermoState] = useState("");
    const posts = [
        { id: 1, autor: "Ana", texto: "JSX ❤️" },
        { id: 2, autor: "Leo", texto: "Hooks são poderosos" },
        { id: 3, autor: "Ana", texto: "Adoro componentes funcionais" },
        { id: 4, autor: "Leo", texto: "Context API facilita muito" },
        { id: 5, autor: "Maria", texto: "React é declarativo e simples" },
        { id: 6, autor: "Ana", texto: "useState é meu hook favorito" },
        { id: 7, autor: "Pedro", texto: "O Virtual DOM é incrível" },
        { id: 8, autor: "Leo", texto: "React Router deixa tudo mais organizado" },
        { id: 9, autor: "Maria", texto: "Styled Components ajudam no CSS" },
        { id: 10, autor: "Ana", texto: "Gosto de praticar criando pequenos projetos" },
        { id: 11, autor: "Pedro", texto: "O useEffect pode ser complicado no início" },
        { id: 12, autor: "Leo", texto: "A comunidade React é enorme" },
        { id: 13, autor: "Ana", texto: "Já usei React com TypeScript" },
        { id: 14, autor: "Maria", texto: "Boas práticas evitam bugs" },
        { id: 15, autor: "Leo", texto: "Server Components são promissores" },
        { id: 16, autor: "Pedro", texto: "Suspense melhora a experiência do usuário" },
        { id: 17, autor: "Ana", texto: "Sempre uso propTypes ou TS para validar" },
        { id: 18, autor: "Maria", texto: "React combina bem com Node.js" },
        { id: 19, autor: "Leo", texto: "Já migrei projetos de classe para função" },
        { id: 20, autor: "Pedro", texto: "React DevTools ajudam muito no debug" }
    ];
    return (
        <div className="border border-dark rounded m-2">
            <h1 className="mx-2">Feed Filtravel</h1>
            <FiltroAutor usuarioTermoState={usuarioTermoState} setUsuarioTermoState={setUsuarioTermoState} />
            <FiltroConteudo conteudoTermoState={conteudoTermoState} setConteudoTermoState={setConteudoTermoState} />
            <Lista posts={posts} usuarioTermoState={usuarioTermoState} conteudoTermoState={conteudoTermoState} />
        </div>
    )
}
export default FeedFiltravel