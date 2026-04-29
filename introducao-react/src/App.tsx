import "./App.css";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Card from "./components/card/Card";
import Rodape from "./components/rodape/Rodape";
import { alunos } from "./data/listaAlunos";
import { disciplinas } from "./data/listaDisciplinas";
import CardDisciplina from "./components/cardDisciplina/CardDisciplina";

function App(){

  return(
    <>
    <div className="conponetes">
     <Cabecalho/>
      {alunos.map((aluno) => (
        // Aqui eu digo o que a função irá realizar.
        <Card 
              key={aluno.id}
              nomeAluno={aluno.nome}
              cursoAluno={aluno.curso}
              statusAluno={aluno.ativo} 
        />

      ))}

      {disciplinas.map((disciplinas) => (
        <CardDisciplina
              key={disciplinas.id}
              nome={disciplinas.nome}
              cargaHoraria={disciplinas.cargaHoraria}
              professor={disciplinas.professor}
              concluido={disciplinas.concluido}
        />  
      ))}

     <Rodape/>
    </div>


    </> // Fragmento vazio para evitar a necessidade de uma div extra
  );
}

export default App;