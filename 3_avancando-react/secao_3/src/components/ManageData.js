import { useState } from "react"

function ManageData() {
    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number)

    return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData=15)}>Mudar valor da variavel</button>

        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Novo Valor Variavel</button>
    </div>

  )
}

export default ManageData