// src/App.jsx
import BootstrapTest from "../components/BootstrapTest"
import Contador from "../components/Contador"
import Feed from "../components/Feed"
import FeedFiltravel from "../components/FeedFiltravel"
import NovoPost from "../components/NovoPost"
import Perfil from "../components/Perfil"
import Saudacao from "../components/Saudacao"

const App = () => {
    return (
        <>
            <Perfil nome="Leonardo" descricao="Prof. de Desenvolvimento Web" />
            <Saudacao nome="Ester" />
            <Contador />
            <Feed />
            <NovoPost />
            <FeedFiltravel />
            <BootstrapTest />
        </>
    )
}
export default App