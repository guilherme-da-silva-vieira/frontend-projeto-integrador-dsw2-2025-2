import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
const Register = () => {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", papel: "1" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Converte papel para número antes de enviar
    const dadosParaEnviar = {
      ...form,
      papel: Number(form.papel)
    };

    try {
      const response = await fetch("http://localhost:3000/api/usuarios/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosParaEnviar)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.erro || "Erro ao cadastrar");
        return;
      }

      // Login automático após cadastro
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Conta criada com sucesso!");

      // Redireciona
      if (data.user.papel === 0) {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/user");
      }

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <>
      <Navbar />
      <div className='mt-5 w-50 m-auto border border-secondary rounded p-5'>
        <h1 className='text-center'>Cadastrar</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-floating mb-3'>
            <input className='form-control' type="text" name="nome" id="nome" placeholder='nome' value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
            <label htmlFor="nome">Nome do Usuário</label>
          </div>
          <div className='form-floating mb-3'>
            <input className="form-control" type="email" name="email" id="email" placeholder='email' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
            <label htmlFor="email">Email</label>
          </div>
          <div className='form-floating mb-3'>
            <input className='form-control' type="password" name="senha" id="senha" placeholder='senha' value={form.senha} onChange={e => setForm({ ...form, senha: e.target.value })} required />
            <label htmlFor="senha">Senha</label>
          </div>
          <button type="submit" className='btn btn-primary w-100'>Cadastrar</button>
        </form>
        <div>
          <p>Já tem uma conta? <Link to="/usuarios/login" className='text-primary'>Fazer Login!</Link></p>
        </div>
      </div>
      <div className='position-absolute bottom-0 start-0 end-0'>
        <Footer />
      </div>
    </>
  )
}

export default Register