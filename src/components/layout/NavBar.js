
import logo from "../../img/costs_logo.png"

import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "./Container";




function NavBar() {

  const [active, setMode] = useState(false)

  function toogleMode() {
    setMode(!active)
  }

    return(
        <nav className="navbar">
          <Container>
            <Link to="/">
                <img src={logo} alt="logoSite"/>
            </Link>
            <ul className={active ? 'ativoMenu' : 'list'}>
                <li className="item"><Link to="/">Home</Link></li>
                <li className="item"><Link to="/projects">Projetos</Link></li>
                <li className="item"><Link to="/company">Empresa</Link></li>
            </ul>
            <div className={active ? 'ativo' : 'menu'} onClick={toogleMode}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
             
            </div>
          </Container>
        </nav>
    );
};

export default NavBar