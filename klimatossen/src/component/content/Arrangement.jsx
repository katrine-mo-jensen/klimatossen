import style from "../content/arrangement.module.scss";
import bucket from "../../assets/arrangement.png";

export function Arrangement() {
  return (
    <section className={style.arrangement}>
      <div>
        <h3>Deltage i arrangement</h3>
        <section>
          <img src={bucket} alt="Cleaning supplies" />
          <article>
            <h4>Deltag i et af vores arrangementer og gør en forskel!</h4>
            <p>
              - “Combing” (”at fjerne affald”, f.eks. beachcombing: , rense
              stranden for affald og elementer der ikke hører hjemme her).
              Invester en dag med familien i naturen og sammen med andre.
            </p>
            <p>- Tilmeld dig eet arrangement i dit område.</p>
            <p>- Tag ansvar hjælp dit nærområde og os alle sammen generelt. </p>
            <p>- Mød nye mennesker omkring en fælles opgave. </p>
            <p>- Tag famillien med på en dag for naturen og vores fremtid. </p>
            <p>
              - Tilmeld dig et af vore arrangementer, eller modtag information
              om Klimatossen!
            </p>
            <p>- Hent mere information på siden “Tilmeld Dig”.</p>
            <a href="#">Læs mere</a>
          </article>
        </section>
      </div>
    </section>
  );
}
