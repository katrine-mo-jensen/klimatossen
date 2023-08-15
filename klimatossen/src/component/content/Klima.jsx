import style from "../content/klima.module.scss";

export function Klima() {
  return (
    <section className={style.Klima}>
      <h3>Klima og miljø</h3>
      <section>
        <img src="#" alt="The earth with a termometer" />
        <article>
          <h4>Kort om klimaet og miljøet</h4>
          <p>
            - Klima og miljø hænger sammen. <br />
            - Klimaforandringer påvirker miljøet og omvendt . <br />
            - Miljøet kan betragtes som en organisme, og er det vi baserer vores
            liv og overlevelse på, hvis vi ændrer i miljøet, har det oftest en
            dominoeffekt, der påvirker alle dele i miljøet. <br />
            - Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele
            kloden, med ændringer i temperatur og nedbør som følge. <br />
            - Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre og
            infrastruktur, men også biodiversiteten som planter insekter mm.{" "}
            <br />- Din adfærd påvirker klimaet i størrer eller mindre grad.
          </p>
        </article>
      </section>
      <a href="#">Læs mere</a>
    </section>
  );
}
