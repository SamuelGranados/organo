
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [participantes, setParticipantes] = useState([])

  const aoNovoParticipanteCadastrado = (participante) => {
    console.log(participante)
    setParticipantes([...participantes, participante])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoParticipanteCadastrado={participante => aoNovoParticipanteCadastrado(participante)} />
    </div>
  );
}

export default App;
