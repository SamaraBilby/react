
import './App.css';

//tem que importar a imagem quando esta no src

import City from './assets/city.jpeg';

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      
      <div>
        {/* imagem em public */}
          <img src="/img1.jpeg" alt="paisagem" />
      </div>

      {/* imagem em src assets */}
      <div>
         <img src={City} alt="Cidade" />
      </div>
    </div>
  );
}

export default App;
