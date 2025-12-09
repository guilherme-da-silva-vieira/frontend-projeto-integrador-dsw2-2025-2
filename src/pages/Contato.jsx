import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const Contato = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-5 h-50 w-50 m-auto border rounded">
        <h1 className="text-center">Entre em contato</h1>
        <p className="text-center fs-2"><a className="text-secondary" href="mailto:guilherme_silva_vieira@proton.me" target="_blank">Meu E-mail</a></p>
        <p className="text-center fs-2"><a className="text-secondary" href="https://guilherme-da-silva-vieira.github.io/" target="_blank">Meu Site</a></p>
        <p className="text-center fs-2"></p>
      </div>
      <div className="position-absolute bottom-0 start-0 end-0">
        <Footer/>
      </div>
    </>
  )
}

export default Contato