// src/components/BootstrapTest.jsx
import { Button } from "react-bootstrap";
const BootstrapTest = () => {
    return (
        <>
            {/* Use classes do Bootstrap no JSX com className (nunca class): */}
            {/* Se usar class em vez de className, o React mostrará warning no console do navegador. */}
            <button className="btn btn-primary">Azul</button>
            {/* Ou use componentes prontos do React-Bootstrap: */}
            <Button variant="danger">Vermelho</Button>
        </>
    )
}
export default BootstrapTest