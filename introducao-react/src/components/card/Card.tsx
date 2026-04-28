import "./Card.css";

function Card(){

    const nomeAluno = "José Carvalho";
    const cursoAluno = "TDS02";
    const ativo = true;

    return(
        <div className="card-aluno">
            <h2>{nomeAluno}</h2>
            <p>{cursoAluno}</p>
            <p>Status aluno: {ativo ? "✅" : "⛔"}</p>
        </div>
    );
}

export default Card;
