import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(false);
    const [name, setName] = useState("Andrio");
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se X é verdadeiro(true) será exibido.</p>}
        {!x && <p>Agora x é false</p>}

        <div>
            {name === "Andrio" ? (
                <div>Seu nome é Andrio</div>
                )
                :
                (
                <div>Seu nome não é Andrio</div>
                )
            }  
        </div>
        <button onClick={()=> setName("Andrio")}>Clique para saber o nome!</button>
    </div>
  )
}

export default ConditionalRender