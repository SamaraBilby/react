
import './App.css';
import ChallengeCSS from './components/ChallengeCSS';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {

  const n = 15;

  const redTitle = false;
  return (
    <div className="App">
      {/* CSS Glogal */}
      <h1>React com CSS</h1>

      {/* CSS de Component */}
     <MyComponents/>

     <p>Este paragrafo é do APP.JS</p>

      {/* Inline CSS */}
      <p style={{color:"blue", padding: "25px", backgroundColor: "red"}}>Este Elemento foi estilizado de forma inline</p>
    
      {/* Inline Style Dinâmico */}

      <h2 style={n < 10 ? ({color:"purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
    
      {/* Classes dinâmicas no CSS */}

      <h2 className={redTitle ? "red-title" : "title"}>Esse título vai ter classe dinâmicas</h2>

      {/* CSS Modules */}

      <h2>CSS Modules</h2>
      <ul>
        <li>Exclusivo do componente</li>
        <li>O nome do arquivo é: Componente.module.css</li>
        <li>Precisamos importá-lo também no componente</li>

        <Title/>
      </ul>

      {/* Desafio CSS */}

      <h2 className="desafioCss"> Desafio CSS - Carros</h2>

      <ChallengeCSS/>

    </div>
  );
}

export default App;
