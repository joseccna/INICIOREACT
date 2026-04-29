interface Aluno {
    id: number;
    nome: string;
    curso: string;
    ativo: boolean;
}


export const alunos: Aluno[] = [
    { id: 1, nome: "José Carvalho", curso: "TDS02", ativo: true },
    { id: 2, nome: "Luiz Ricardo", curso: "TDS02", ativo: true },
    // { id: 3, nome: "Maria Silva", curso: "TDS02", ativo: false },
    // { id: 4, nome: "Ana Souza", curso: "TDS02", ativo: true },
    // { id: 5, nome: "Carlos Pereira", curso: "TDS02", ativo: false },
    // { id: 6, nome: "Fernanda Lima", curso: "TDS02", ativo: true }
]
