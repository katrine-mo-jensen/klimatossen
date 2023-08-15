import style from "../content/quote.module.scss";

export function Quote() {
  return (
    <p className={style.quote}>
      “Alle er vi en del af problemet såvel som af løsningen, og vores medvirken
      er helt nødvendig, hvis det skal lykkes at få knækket kurven for udslippet
      af drivhusgasser. Effekten af indsatsen afhænger af, hvor mange der
      trækker i den rigtige retning.”
    </p>
  );
}
