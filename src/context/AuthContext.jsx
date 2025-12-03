import { useContex, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({children}) =>{
  const [id, setId] = useState(0);
  const [access_token,setAToken] = useState("");
  const redirect = useNavigate();
  const loginAction = async (data) => {
    try{
      const response = await fetch("http://localhost:3000/api/usuarios/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      const {erro} = res;
      if(erro == "email e senha são obrigatórios" || erro == "credenciais inválidas"){
        Alert("campoalert","danger","Crendenciais inválidas, tente novamente!");
        return;
      }
      else{
        setId(id);
        setAToken(res.access_token);
        localStorage.setItem("access_token",res.access_token);
        redirect("/mensagens");
        return;
      }
      throw new Error(res.erro);
    }
    catch(erro){
      console.log(erro);
    }
  }
  const logOut = () =>{
    setId(0);
    setAToken("");
    localStorage.removeItem("access_token");
    navigate("/usuarios/login")
  }
  return <AuthContext.Provider value={{access_token, id, loginAction, logOut}}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext);
};