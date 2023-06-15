import styles from "./Company.module.css"
import logo from "../../img/Business innovation based on alternative financial services.jpg"


function Company() {
    return(
        <section className={styles.container_company} >
           <article>
            <h1>Conheça um pouco mais da <span>Costs Company</span> </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                 elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation ullamco laboris nisi ut 
                 aliquip ex ea commodo consequat. Duis aute irure 
                 dolor in reprehenderit in voluptate velit esse 
                 cillum dolore eu fugiat nulla pariatur. Excepteur 
                 sint occaecat cupidatat non proident, sunt in culpa
                 qui officia deserunt mollit anim id est laborum.
                </p>
           </article>
                <div>
                    <img src={logo} alt="Costs" />
                </div>
        </section>
    )
}

export default Company