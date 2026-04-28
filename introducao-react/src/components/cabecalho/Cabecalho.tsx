//Convenção: nomes de componentes sempre começam com letra maiuscula

function Cabecalho() {
    
    const nomeDoCurso = "Técnico em Desenvolvimento de Sistemas";
    const anoAtual = new Date().getFullYear();
    const DescriçãoCurso = "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!";

    return(
        //Dentro do retorno, códio JavaScript deve ser colocado entre chaves "{}"
        <header>
        <h1>{nomeDoCurso}</h1>
        <p>{DescriçãoCurso}</p>
    <p>{anoAtual}</p>

    </header> ) ;
}

// export default é a forma de exportar um componente para que ele possa ser importado em outros arquivos
export default Cabecalho;