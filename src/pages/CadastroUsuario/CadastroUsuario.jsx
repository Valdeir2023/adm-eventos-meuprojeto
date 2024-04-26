import React, { useState } from 'react';

const CadastroUsuario = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    senha: '',
    confSenha: ''
  });//OBJETO

  const alteraFormulario = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const meuSubmit = (evento) => {
    evento.preventDefault()
    console.log(formulario)
  }

  return (
    <div>
      <h2>CADASTRO DE USUÁRIO</h2>
      <form>
        <label htmlFor='nome'>Nome:</label>
        <input type='text' id='nome' name='nome' value={formulario.nome} onChange={alteraFormulario} required/>

        <label htmlFor='e-mail'>E-mail:</label>
        <input type='email' id='e-mail' name='email' value={formulario.email} onChange={alteraFormulario} required/>

        <label htmlFor='senha'>Senha:</label>
        <input type='password' id='senha' name='senha' value={formulario.senha} onChange={alteraFormulario} required/>

        <input type='submit' value='Cadastrar'/>
      </form>
    </div>
  );
};

export default CadastroUsuario;
