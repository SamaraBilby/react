import {useState} from 'react'

const ListRender = () => {
    const [list] =useState(["Samara", "Lindsay", "Andrio", "Lulu", "Tereza", "Scooby"]);
  
    const[user, setUser] = useState([
        {id: 1, name:"Samara", age:33},
        {id: 2, name:"Andrio", age:34},
        {id: 3, name:"Lindsay", age: 16},
        
    ]);

    const deleteRandom =() =>{
        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);

        setUser((prevUser)=>{
            return prevUser.filter((user) => randomNumber !== user.id)
        });
    };  

    return (
    <div>
        <ul>
            {list.map((item, i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
}

export default ListRender