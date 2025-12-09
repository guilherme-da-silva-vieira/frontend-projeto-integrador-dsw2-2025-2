import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const Sobre = () => {
  return (
    <>
      <Navbar />
      <div className="h-50 w-50 m-auto mt-5 border border-rounded">
        <h1 className="text-center">Sobre o software</h1>
        <p className="fs-3 text-center">Programado por Guilherme da Silva Vieira.</p>
        <h2 className="mt-5">Agradecimentos especiais&#x2764;:</h2>
        <ul className="fs-3">
          <li>Leonardo Bravo Estacio;</li>
          <li>Edinilson da Silva Vida.</li>
        </ul>
      </div>
      <div className="position-absolute bottom-0 start-0 end-0">
        <Footer/>
      </div>
    </>
  )
}

export default Sobre