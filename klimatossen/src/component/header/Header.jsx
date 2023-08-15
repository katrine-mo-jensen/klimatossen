import style from "../header/header.module.scss";
import logo from "../../assets/logo.png"

export function Header() {
  return (
    <header>
     
      <img className="logo" src={logo} alt="Klimatossen logo and url" />
      <p>
        "Det er rigtigt, at vi hver især kun kan bidrage lidt <br />
        til den samlede løsning"
      </p>
      <p>"Lige så rigtigt er det, at vi slet ikke kan nå målet, <br/>
      uden at hver især bidrager en smule til det"</p>
      <nav>
        <ul>
            <li><a href="#">Start</a></li>
            <li><a href="#">Dit CO2</a></li>
            <li><a href="#">Clean up</a></li>
            <li><a href="#">Tilmeld dig</a></li>
        </ul>
      </nav>
      
    </header>
  );
}
