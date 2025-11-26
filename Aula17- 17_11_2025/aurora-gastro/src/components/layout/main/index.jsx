import bifeWellington from "../../../assets/images/bife_wellington.png"
import "./style.css"

export const Main = () => {
    return (
        <main>
            <div className="content-main">
                <h1>A <span>Melhor Experiência</span> Gastronômica da Cidade</h1>
                <p>Pratos fresco</p>
                <div className="content-btn-main">
                    <a href="" className="btn-primary">Peça Agora</a>
                    <a href="" className="btn-secondary">Saiba Mais</a>
                </div>
            </div>
            <img src={bifeWellington} alt="" />
        </main>
    )
}