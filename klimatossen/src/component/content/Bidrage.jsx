import style from "../content/bidrage.module.scss";

export function Bidrage() {
  return (
    <section className={style.Bidrage}>
      <h3>Hvordan kan jeg bidrage?</h3>
      <section>
        <img src="#" alt="Checklist" />
        <article>
          <h4>Hvordan belaster du miljøet mindst muligt i dagligdagen?</h4>
          <p>
            - Dit forbrug overordnet herunder din produktion af affald, bidrager
            til udledning af CO2 <br />
            - Fødevareproduktion har stor indflydelse på CO2 balancen, tænk over
            dit valg i dagligdagen. - Din bolig og den måde du har indrettet dig
            påvirker miljøet. <br />
            - Jordens skove og verdenshavene er den største "producent" af den
            ilt, der er nødvendig, for liv på Jorden, som vi kender det. <br />
            - Mennesket er den enlige faktor der har den største indflydelse på
            CO2 -balancen på Jorden i dag! <br />- Du kan påvirke CO2 balancen,
            både ved at ændre små ting i din hverdag, eller ved aktivt deltage i
            kampen for et bedre miljø.
          </p>
        </article>
      </section>
      <a href="#">Læs mere</a>
    </section>
  );
}
