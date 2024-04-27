import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../database/firebaseConfig'; 
import { doc, getDoc, setDoc } from "firebase/firestore"; 



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

  const meuSubmit = async (evento) => {
    evento.preventDefault()
    console.log(formulario) //é umn objeto //

    const docRef = await addDoc(collection(db, "Usuarios"), formulario)
  }


  const salvar2 = async () =>
  {
    const docRef = doc(db, "Usuarios", formulario.email);
    const docSnap = await getDoc(docRef);

  if (doc.docSnap.exists()) {
    alert ("Esse E-mail Ja existe") ////////// MENSAGEM AINDA NAO ESTA PEGANDO ////////////////////////
  }
  else 
  {
    await setDoc(doc(db, "Usuarios", formulario.email), formulario);
  }
  

  }

  return (
    <div>
      <h2 className="titulo_nome">CADASTRO DE USUÁRIO</h2>
      <form onSubmit={meuSubmit}>
        <label htmlFor='nome'>Nome:</label>
        <input type='text' id='nome' name='nome' value={formulario.nome} onChange={alteraFormulario} required/>

        <label htmlFor='e-mail'>E-mail:</label>
        <input type='email' id='e-mail' name='email' value={formulario.email} onChange={alteraFormulario} required/>

        <label htmlFor='senha'>Senha:</label>
        <input type='password' id='senha' name='senha' value={formulario.senha} onChange={alteraFormulario} required/>

        <input type='submit' value='Cadastrar'/>
      
      </form>
      <button onClick={salvar2}>salvar2</button>
    </div>
  );
};

export default CadastroUsuario;
