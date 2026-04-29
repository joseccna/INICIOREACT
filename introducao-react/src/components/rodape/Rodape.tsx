import "./Rodape.css";

function Rodape(){

    const anoAtual = new Date().getFullYear();

    return(
        <footer className="rodape">
            <p>© {anoAtual} - Senac São Paulo</p>
        </footer>
    )

};

export default Rodape;