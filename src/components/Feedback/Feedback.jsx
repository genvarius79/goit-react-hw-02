import css from './Feedback.module.css';
export default function Feedback() {
  return (
    <div>
      <p className={css.feedback}>Good: </p>
      <p className={css.feedback}>Neutral: </p>
      <p className={css.feedback}>Bad: </p>
      <p className={css.feedback}>Total: </p>
      <p className={css.feedback}>Positive: </p>
    </div>
  );
}
