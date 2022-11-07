import {useState} from "react";

const UserDetails = () => {

    const[user] = useState([
        {id: 1, name:"Samara", profession: "Desenvolvedor Front-End", age: 33},
        {id: 2, name:"Andrio", profession:"Engenheiro de Produção", age: 34},
        {id: 3, name:"Lindsay", profession: "Estudante", age: 9},
        
    ]);

  return (
    <div>
        <ul>
            {user.map((user)=>(
                <li key={user.id}>{user.name} - {user.profession} - {user.age}</li>
            ))}
        </ul>
        
        <div>
           {user.map((user)=>(
                <div key={user.id}>
                    
                    <h2>{user.name}</h2>

                    <p>Idade: {user.age}</p>
                    <p>Profissão: {user.profession}</p>
                    
                     {user.age >= 18 ? 
                    (<p> Parabéns {user.name}!! Pode tirar CNH</p>)
                    : 
                    (<p> Poxa {user.name}, infelizmente você pode tirar CNH</p>)
                } </div>
            ))}
        </div>

    </div>
  )
}

export default UserDetails