import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import MensagensIndex from "./pages/mensagens/MensagensIndex.jsx";
import MensagensCreate from "./pages/mensagens/MensagensCreate.jsx";
import MensagensEdit from "./pages/mensagens/MensagensEdit.jsx";
import MensagensShow from "./pages/mensagens/MensagensShow.jsx";
import Login from "./pages/usuarios/Login.jsx";
import Register from "./pages/usuarios/Register.jsx";
import Profile from "./pages/usuarios/Profile.jsx";
import DashboardAdmin from "./pages/dashboards/DashboardAdmin.jsx";
import DashboardUser from "./pages/dashboards/DashboardUser.jsx";
import Dashboard from "./pages/dashboards/Dashboard.jsx";
import Sobrescrever from "./pages/admin/Sobrescrever.jsx";
import UsuariosShow from "./pages/usuarios/UsuariosShow.jsx";
import UsuariosSobrescrever from "./pages/admin/UsuariosSobrescrever.jsx";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/sobre", element: <Sobre /> },
    { path: "/contato", element: <Contato /> },
    { path: "/mensagens", element: <MensagensIndex/> },
    { path: "/mensagens/create", element: <MensagensCreate/>},
    { path: "/mensagens/edit/:id", element: <MensagensEdit/>},
    { path: "/mensagens/show/:id", element: <MensagensShow/>},
    { path: "/usuarios/login", element: <Login/>},
    { path: "/usuarios/register", element: <Register/>},
    { path: "/usuarios/profile", element: <Profile/>},
    { path: "/dashboard/admin", element: <DashboardAdmin/>},
    { path: "/dashboard/user", element: <DashboardUser/>},
    { path: "/dashboard", element: <Dashboard/>},
    { path: "/admin/sobrescrever/:id", element: <Sobrescrever/>},
    { path: "/usuarios/show/:id", element: <UsuariosShow/>},
    { path: "/admin/usuarios/sobrescrever/:id", element: <UsuariosSobrescrever/>}
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);