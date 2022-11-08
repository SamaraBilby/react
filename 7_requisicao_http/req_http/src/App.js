import './App.css';

import {useState, useEffect} from "react";

// 4 - custom hook

import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  const[products, setproducts] = useState([]);

  //4-custom hook

  const {data: items, httpConfig, loading, error} =useFetch(url);

  const[name, setName] = useState("");
  const[price, setPrice] = useState("");

  //1--Resgatando dados da API



  /*useEffect(() => {

    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()

      setproducts(data)

    }

    fetchData()
  }, [])

  console.log(products) */

  // 2- add produto

  const handleSubmit=async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

  /*  const res = await fetch (url, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },

      body:JSON.stringify(product),
    });

    // 3 - carregamento dinâmico

    const addedProduct =await res.json()

    setproducts((prevProducts)=> [...prevProducts, addedProduct])*/
    
    // 5 - refatorando POST
    
    httpConfig(product, "POST")
    
    setName("");
    setPrice("")
  };


  



  return (
    <div className="App">

      <h4>Lista de produtos</h4>

        {/* 6-Loading */}

        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!loading && <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price}</li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          
          <label>
            Nome:
            <input type="text" name="name" value={name}  onChange={(e) => setName(e.target.value)}/>
          </label>

          <label>
            Preço:
            <input type="number" name="price" value={price}  onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* 7 - estado de loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}

        </form>
      </div>
    </div>
  );
}

export default App;
