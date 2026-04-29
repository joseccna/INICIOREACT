import "./Card.css";

interface CardProps{
    nomeAluno: string;
    cursoAluno: string; // obrigatório
    statusAluno?: boolean; // opcional
}


// Componente funcional que recebe props e exibe as informações do aluno
// O status do aluno é exibido como um emoji: ✅ para ativo e ⛔ para inativo
// O status do aluno é opcional e, se não for fornecido, será considerado como ativo (true) por padrão

function Card({nomeAluno, cursoAluno, statusAluno = true}: CardProps){



    return(
        <div className="card-aluno">
            <h2>{nomeAluno}</h2>
            <p>{cursoAluno}</p>
            <p>Status aluno: {statusAluno ? "✅" : "⛔"}</p>
        </div>
    );
}

export default Card;
