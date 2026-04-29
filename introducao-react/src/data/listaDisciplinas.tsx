interface Disciplina {
    id: number;
    nome: string;
    cargaHoraria: number;
    professor?: string;
    concluido?: boolean;
}

export const disciplinas: Disciplina[] = [
    { id: 1, nome: "Matemática", cargaHoraria: 60, professor: "Dr. Silva", concluido: true },
    { id: 2, nome: "Português", cargaHoraria: 45, professor: "Profª. Souza", concluido: false }
]