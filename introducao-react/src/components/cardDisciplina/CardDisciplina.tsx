import "./CardDisciplina.css";

interface CardDisciplinaProps{
    nome: string;
    cargaHoraria: number; // obrigatório
    professor?: string; // opcional
    concluido?: boolean; // opcional
}

function CardDisciplina({nome, cargaHoraria, professor = "A definir", concluido = false}: CardDisciplinaProps){

    return(
        <div className="card-disciplina">
            <h2>{nome}</h2>
            <p>Carga Horária: {cargaHoraria} horas</p>
            <p>Professor: {professor}</p>
            <p>Status: {concluido ? "Concluído ✅" : "Em andamento 🔄️"}</p>
        </div>
    )
};

export default CardDisciplina