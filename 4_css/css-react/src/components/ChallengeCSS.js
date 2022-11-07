import styles from "./ChallengeCSS.module.css"

const ChallengeCSS = () => {
    
    const car = [
        {id:1, brand:"Ford", color:"Preto", newCar: true, km:0},
        {id:2, brand:"Hyundai", color:"Prata", newCar: false, km: 2000},
        {id:3, brand:"Renoult", color:"Vermelho", newCar: false, km: 3540},
      ];
  
    return (
    <div>
        {car.map((car)=>
            <div key={car.id}>
                <h2>Carro a Venda</h2>
                <p className= {styles.marca}>Marca: {car.brand}</p>
                <p className= {styles.cor}>Cor: {car.color}</p>
                <p className= {styles.newCar}>Novo: {car.newCar ? "Sim" : "Não" }</p>
                <p className= {styles.km}>km: {car.km}</p>
            </div>

        )}
    </div>
  )
}

export default ChallengeCSS