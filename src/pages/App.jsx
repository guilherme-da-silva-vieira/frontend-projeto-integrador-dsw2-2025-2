// src/App.jsx

import Navbar from "../components/Navbar"
import { useState, useContext } from "react";
import { AuthContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Login from "./usuarios/Login";
const App = () => {
    // const { register } = useContext(AuthContext);
    return (
        <Navbar />
    )
}
        /*<>
            <AuthProvider>
                <BrowserRouter>
                    <nav style={{ padding: 10, borderBottom: "1px solid #ddd" }}>
                        <Link to="/">Login</Link> | <Link to="/cadastro">Cadastro</Link> | <Link to="/login">entrar</Link>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>*/
export default App