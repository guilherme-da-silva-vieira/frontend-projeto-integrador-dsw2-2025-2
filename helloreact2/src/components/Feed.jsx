// src/components/Feed.jsx
import { useState } from "react";

const posts = [
    { id: 1, autor: "Ana", texto: "Primeiro post!" },
    { id: 2, autor: "Leo", texto: "React é top!" },
];
const Like = ({ curtidas, onCurtir }) => {
    return <button className="btn btn-info" onClick={onCurtir}>👍 {curtidas}</button>;
}
const Post = ({ autor, texto }) => {
    const [curtidas, setCurtidas] = useState(0);
    const curtir = (e) => {
        e.preventDefault();
        setCurtidas(curtidas + 1);
    }
    return (
        <article className="border border-dark rounded my-2 p-2">
            <strong>{autor}</strong>
            <p className="m-0">{texto}</p>
            <Like curtidas={curtidas} onCurtir={curtir} />
        </article>
    )
}
const Feed = () => {
    return (
        <div className="border border-dark rounded m-2 p-2">
            <h1>Feed</h1>
            {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
    );
}
export default Feed
