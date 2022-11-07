import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
        <div>
          <h2> Form React</h2>
            <ul>
              <li>Vamos utilizar a Tag Form para formulários</li>
              <li>As labels dos inputs contém o atributo htmlFor, que deve ter o valor do name do input</li>
              <li>Não utlizamos action, pois o processamento será feito de forma assíncrona</li>
            </ul>
            <br/>

            <h2>Label envolvendo o input</h2>
            <ul>
              <li>Em react um padrão comum é a tag label envolvendo o input</li>
              <li>Isso faz com que o atributo for se torne opcional</li>
              <li>Simplificando nossa estrutura de HTML, sem perder a semântica</li>
            </ul>
            <br />
            
            <h2>Manipulação de valores</h2>
            <ul>
              <li>Vamos utilizar o hook useState para minipular valores do input</li>
              <li>Ou seja, podemos armazenar na variável e utilizar o set para alterar o valor</li>
              <li>Vamos criar uma função para alterar o valor no evento onChange</li>
              <li>Deixando nosso código fácil de trabalhar nas próximas etapas: como envio dos dados para o BD e validação</li>
            </ul>
            <br/>
            <h2>Simplificando a manipulação </h2>
            <ul>
              <li>Quando temos vários inputs podemos utilizar a manipulação de forma mais simples, quando só se quer o valor do input.</li>
              <li>criamos uma função inline no onChange</li>
              <li>Ele vai alterar o valor do state com método set</li>
            </ul>
            <br/>
            <h2>Envio de Formulário</h2>
            <ul>
              <li>Para enviar um form vamos utilizar o evento onSubmit</li>
              <li>Ele chamarará uma função e nesta devemos lembrar de parar a submissão com o preventDefault</li>
              <li>Nesta etapa podemos realizar validações, envio de form para o servidor, reset de form e outras ações</li>
            </ul>
              <br/>
            <h2>Controlled inputs</h2>
            <ul>
              <li>Esse recurso nos permite mais flexibilidade nos forms de React</li>
              <li>Precisamos apenas igualar o valor ao state</li>
              <li>Uso comum: Formulários de edição, que os dados vem do back-end, conseguiremos preencher o input mais facilmente.</li>
            </ul>
            <br/>

            <h2>Limpando formulários</h2>
            <ul>
              <li>Basta atribuir um valor de uma string vazia aos states.</li>
              <li>Isso será feito após o envio, em formulários que o usuário precisa preencher navamente.</li>
            </ul>
            <br/>
        </div>
        
        <div>

        <MyForm user={{name:"Samara", email:"samara@email.com", bio:"programadora", role:"admin"}}/>

        </div>
    
    </div>
  );
}

export default App;
