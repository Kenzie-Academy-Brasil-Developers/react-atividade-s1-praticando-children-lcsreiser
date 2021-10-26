import logo from "./logo.svg";
import "./App.css";

import CenteredCard from "./components/CenteredCard/CenteredCard";

function App() {
  const person = {
    name: "Lucas Reiser",
    hobby: "Jogar joguinhos e assistir desenhos",
    race: "Humano",
    qi: -2,
    function: "Gastar dinheiro",
  };

  return (
    <div className="App">
      <div className="App-header">
        <CenteredCard>
          <p>Nome: {person.name}</p>
          <p>Hobby: {person.hobby}</p>
          <p>Raça: {person.race}</p>
          <p>QI: {person.qi}</p>
          <p>Função: {person.function}</p>
        </CenteredCard>
        <CenteredCard>
          <p>Nome: João</p>
          <p>Hobby: Construir aviões</p>
          <p>Raça: Elfo</p>
          <p>QI: 431</p>
          <p>Função: Acertar flechas em orcs</p>
        </CenteredCard>
        <CenteredCard>
          <p>
            Nome: Maria <br /> Hobby: Surfar <br /> Raça: Morto-vivo
            <br /> Qi: 10 <br /> Função: Comer cérebros
          </p>
        </CenteredCard>
      </div>
    </div>
  );
}

export default App;
