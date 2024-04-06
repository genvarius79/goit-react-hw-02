import css from './Feedback.module.css';
export default function Feedback({
  reviews: { good, neutral, bad },
  totalFeedback,
  positiveReviews,
}) {
  return (
    <div>
      <p className={css.feedback}>Good: {good} </p>
      <p className={css.feedback}>Neutral: {neutral}</p>
      <p className={css.feedback}>Bad: {bad} </p>
      <p className={css.feedback}>Total: {totalFeedback} </p>
      <p className={css.feedback}>Positive: {positiveReviews} </p>
    </div>
  );
}
