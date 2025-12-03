const Alert = (id,tipo,mensagem) => {
    const lugar = document.getElementById(id);
    lugar.innerHTML = `<div class="alert alert-${tipo} alert-dismissible" role="alert">
        <div>${mensagem}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}

export default Alert