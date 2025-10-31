import React from 'react'
import Navbar from '../../components/Navbar'
import ListaMensagem from '../../components/ListaMensagem'
import Ferramentas from '../../components/Ferramentas'
import Footer from '../../components/Footer'

const MensagensIndex = () => {
  return (
    <>
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