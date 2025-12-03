// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AuthProvider from "./context/AuthContext"
import Login from "./pages/usuarios/Login"
import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Register from "./pages/usuarios/Register"
import PrivateRoutes from "./routes/PrivateRoutes"
import Profile from "./pages/usuarios/Profile"
import MensagensIndex from "./pages/mensagens/MensagensIndex"
import MensagensCreate from "./pages/mensagens/MensagensCreate"
import MensagensEdit from "./pages/mensagens/MensagensEdit"
import MensagensShow from "./pages/mensagens/MensagensShow"
import Sobre from "./pages/Sobre";
const App = () => {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/usuarios/login" element={<Login/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/contato" element={<Contato/>}/>
                        <Route path="/sobre" element={<Sobre/>}/>
                        <Route path="/usuarios/register"element={<Register/>}/>
                        <Route element={<PrivateRoutes/>}>
                            <Route path="/usuarios/profile" element={<Profile/>}/>
                        </Route>
                        <Route element={<PrivateRoutes/>}>
                            <Route path="/mensagens" element={<MensagensIndex/>}/>
                        </Route>
                        <Route element={<PrivateRoutes/>}>
                            <Route path="/mensagens/create" element={<MensagensCreate/>}/>
                        </Route>
                        <Route element={<PrivateRoutes/>}>
                            <Route path="/mensagens/edit" element={<MensagensEdit/>}/>
                        </Route>
                        <Route element={<PrivateRoutes/>}>
                            <Route path="/mensagens/show" element={<MensagensShow/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}
export default App