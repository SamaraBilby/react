
import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import MessageChange from './components/MessageChange';
import UserDetails from './components/UserDetails';

function App() {

  function showMessage(){
    console.log("Event do componete pai!");
  }

  const [message, setMessage] = useState ("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  return (
    <div className="App">
      <UserDetails/>
      <Container myValue= "testando">
          <p>Este é um conteúdo</p>
      </Container>
      <Container myValue= "testando 2">
          <p>Este é outro conteúdo</p>
      </Container>

      {/* Função */}
      <div>
      <ExecuteFunction myFunction={showMessage}/>
      </div>

      {/* State Lift */}

      <div>
        <Message msg={message}/>
        <MessageChange handleMessage = {handleMessage}/>
      </div>
 </div>
  );
}

export default App;
