import style from "../content/bidrage.module.scss";
import checklist from "../../assets/checklist.png";

export function Bidrage() {
  return (
    <section className={style.bidrage}>
      <div>
        <h3>Hvordan kan jeg bidrage?</h3>
        <section>
          <img src={checklist} alt="Checklist" />
          <article>
            <h4>Hvordan belaster du miljøet mindst muligt i dagligdagen?</h4>
            <p>
              - Dit forbrug overordnet herunder din produktion af affald,
              bidrager til udledning af CO2.
            </p>
            <p>
              - Fødevareproduktion har stor indflydelse på CO2 balancen, tænk
              over dit valg i dagligdagen.
            </p>
            <p>
              - Din bolig og den måde du har indrettet dig påvirker miljøet.
            </p>
            <p>
              - Jordens skove og verdenshavene er den største "producent" af den
              ilt, der er nødvendig, for liv på Jorden, som vi kender det.
            </p>
            <p>
              - Mennesket er den enlige faktor der har den største indflydelse
              på CO2 -balancen på Jorden i dag!
            </p>
            <p>
              - Du kan påvirke CO2 balancen, både ved at ændre små ting i din
              hverdag, eller ved aktivt deltage i kampen for et bedre miljø.
            </p>
            <a href="#">Læs mere</a>
          </article>
        </section>
      </div>
    </section>
  );
}
