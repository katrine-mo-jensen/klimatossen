import style from "../content/klima.module.scss";
import earth from "../../assets/earth.png";

export function Klima() {
  return (
    <section className={style.klima}>
      <div>
        <h3>Klima og miljø</h3>
        <section>
          <img src={earth} alt="The earth with a termometer" />
          <article>
            <h4>Kort om klimaet og miljøet</h4>
            <p>- Klima og miljø hænger sammen. </p>
            <p>- Klimaforandringer påvirker miljøet og omvendt. </p>
            <p>
              - Miljøet kan betragtes som en organisme, og er det vi baserer
              vores liv og overlevelse på, hvis vi ændrer i miljøet, har det
              oftest en dominoeffekt, der påvirker alle dele i miljøet.
            </p>
            <p>
              - Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele
              kloden, med ændringer i temperatur og nedbør som følge.
            </p>
            <p>
              - Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre
              og infrastruktur, men også biodiversiteten som planter insekter
              mm.
            </p>
            <p>- Din adfærd påvirker klimaet i størrer eller mindre grad.</p>
            <a href="#">Læs mere</a>
          </article>
        </section>
      </div>
    </section>
  );
}
