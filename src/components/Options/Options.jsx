import css from './Options.module.css';
export default function Options() {
  return (
    <div className={css.container}>
      <button className={css.button}>Good</button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={css.button}>Reset</button>
    </div>
  );
}
