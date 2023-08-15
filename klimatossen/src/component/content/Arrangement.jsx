import style from "../content/arrangement.module.scss";

export function Arrangement() {
  return (
    <section className={style.arrangement}>
      <h3>Deltage i arrangement</h3>
      <section>
        <img src="#" alt="Cleaning supplies" />
        <article>
          <h4>Deltag i et af vores arrangementer og gør en forskel!</h4>
          <p>
            - “Combing” (”at fjerne affald”, f.eks. beachcombing: , rense
            stranden for affald og elementer der ikke hører hjemme her).
            Invester en dag med familien i naturen og sammen med andre. <br />
            - Tilmeld dig eet arrangement i dit område . <br />
            - Tag ansvar hjælp dit nærområde og os alle sammen generelt. <br />{" "}
            - Mød nye mennesker omkring en fælles opgave. <br /> - Tag famillien
            med på en dag for naturen og vores fremtid. <br /> - Tilmeld dig et
            af vore arrangementer, eller modtag information om Klimatossen!{" "}
            <br /> - Hent mere information på siden “Tilmeld Dig”.
          </p>
        </article>
      </section>
      <a href="#">Læs mere</a>
    </section>
  );
}
