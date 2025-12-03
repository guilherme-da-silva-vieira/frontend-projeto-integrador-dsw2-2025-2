import { useNavigate } from "react-router-dom";

const Redirect = (rota) => {
    const redirect = useNavigate();
    return redirect(rota);
}

export default Redirect