
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

// para adicionar imagem do src tem que importar a imagem
import City from './assets/city.jpg';


import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';


function App() {

  const name = "Lindsay";
  const [userName] = useState("Scooby")
  
  const cars =[
    {id:1, brand:"Ferrari", color:"Amarelo", newCar: true, km:0},
    {id:2, brand:"KIA", color:"Branco", newCar: false, km:343434},
    {id:3, brand:"Renoult", color:"Azul", newCar: false, km: 234},
  ];
  
  return (
    <div className="App">
      <h1>Seção 3 - Avançando com React</h1>
      {/* Adicionando imagem do public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
        {/* adicionando img do src */}
        <img src={City} alt="Cidade" />
      <div>
        {/* useState Hooks */}

        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        
        {/* props */}
        <ShowUserName name = "Samara"/>
        <ShowUserName name = {name}/>
        <ShowUserName name = {userName}/>

        {/* Destructuring */}
        <CarDetails brand="Ford" km={2000} color="vermelho" />

        {/* reutilizando componentes */}
        <CarDetails brand="VW" km={10000} color="prata" />
        {/* Loop em array */}
        {cars.map((cars) => (
          <CarDetails brand={cars.brand} color={cars.color} km={cars.km} newCar={cars.newCar}/>     
          ))}
      </div>

      {/* Fragments */}
      <Fragments propFragment="teste"/>

      {/*Children*/}
      
      <Container myValue = "teste">
        <p>E este é o conteúdo</p>
        <p>Este é outro conteúdo</p>
      </Container>

    </div>
  );
}

export default App;
