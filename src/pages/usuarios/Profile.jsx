import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Profile = () => {
  return (
    <>
        <Navbar/>
        <div className='mt-5 h-50 w-50 m-auto border rounded'>
            <h1 className="text-center">Nome do Perfil</h1>
            <p className="text-center fs-1">Id: -1</p>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0">
            <Footer/>
        </div>
    </>
  )
}

export default Profile