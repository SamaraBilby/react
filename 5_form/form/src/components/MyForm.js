import "./MyForms.css";
import {useState} from "react";

const MyForm = ({user}) => {
  // 3 - gerenciamento de dados

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const[bio, setBio] = useState(user ? user.bio : "");
  const[role, setRole] = useState(user ? user.role : "");

  const handleName = (e) =>{
   setName(e.target.value);
  }

  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("enviando formulário");
    console.log(name, email, bio, role);

    //7-Limpar formulário

    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }
  return (
    <div>

      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>

          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
          </div>
           
           {/* 2- Label envolbendo o input */}

           <label>
              <span>Email:</span>
              <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
           </label> 
          <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
          </label>
          
          <label>
            <span>Função:</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          
          <input type="submit" value= "Enviar"/>
          
      </form>

    </div>
  )
}

export default MyForm