import React from 'react'
import Navbar from '../../components/Navbar'
import ListaMensagem from '../../components/ListaMensagem'
import Ferramentas from '../../components/Ferramentas'
import Footer from '../../components/Footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Expirar from '../../services/Expirar'

const MensagensIndex = () => {
  const navigate = useNavigate();
  useEffect(() => {
          const storedUser = localStorage.getItem("user");
          const parsedUser = JSON.parse(storedUser);
          if (!storedUser) {
              navigate("/usuarios/login");
              return;
          }
  
          // // Verificação de papel (1 = Usuário)
          // if (parsedUser.papel !== 1) {
          //     // Se for admin tentando acessar, pode redirecionar ou apenas avisar
          //     if (parsedUser.papel === 0) {
          //         navigate("/dashboard/admin");
          //         return;
          //     }
          // }
      }, [navigate]);
  return (
    <>
      <Expirar/>
      <Navbar />
      <div className='row m-2 g-4'>
        <div className='col-12 col-sm-6'>
          <Ferramentas/>
        </div>
        <div className='col-12 col-sm-6 border border-secondary rounded p-3'>
          <ListaMensagem />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MensagensIndex