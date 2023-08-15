import style from "../content/co2.module.scss";
import cloud from "../../assets/cloud.png"

export function Co2() {
  return (
    <section className={style.co2}>
      <div>
      <h3>Hvad er Co2?</h3>
      <section>
        <img src={cloud} alt="Cloud" />
        <article>
          <h4>CO2 er en gasart der findes naturligt i Jordens atmosfære. </h4>
          <p>
            - CO2, findes naturligt i atmosfæren. <br />
            - Livet, er afhængigt af CO2 da det regulerer temperaturen på
            Jorden. <br />
            - CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og
            udånder CO2. Planter optager CO2, og omdanner det til Ilt. Derved
            opnåes en balance i CO2 "regnskabet". <br />
            - Afbrænding f.eks. af fossile brændstoffer, udleder CO2. <br />
            - Jordens skove og verdenshavene er den største "producent" af den
            ilt, der er nødvendig, for liv på Jorden, som vi kender det. <br />-
            Mennesket er den enlige faktor der har den største indflydelse på
            CO2 -balancen på Jorden i dag!
          </p>
        </article>
      </section>
      <a href="#">Læs mere</a>
      </div>
    </section>
  );
}
