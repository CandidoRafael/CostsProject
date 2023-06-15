import styles from "./Home.module.css"
import savings from "../../img/img_projetoReact.jpg"
import LinkButton from "../layout/LinkButton"

function Home() {
    return(
        <section className={styles.home_container} >
           <div>
            <h1>Bem-vindo ao <span>Costs</span> </h1>
                <p>Para ser um empresa de sucesso é necessário
                  ter uma boa organização em todos os setores.
                  Pensando nisso, a <strong>Costs Company</strong> oferece os melhores serviços
                  de gerenciamento de projetos e finanças.
                </p>
                <h2>Crie seu projeto <strong>agora!</strong></h2>
                <LinkButton to="/newproject" text="Criar Projeto" />
           </div>
                <div className={styles.home_img}>
                    <img src={savings} alt="Costs" />
                </div>
        </section>
    )
}

export default Home