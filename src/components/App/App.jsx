import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import { useState, useEffect } from 'react';
import Notification from '../Notification/Notification';

export default function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews !== null
      ? JSON.parse(savedReviews)
      : { good: 0, neutral: 0, bad: 0 };
  });

  function updateFeedback(feedbackType) {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  }
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveReviews = Math.round((reviews.good / totalFeedback) * 100);

  function resetFeedback() {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  }

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      ></Options>
      {totalFeedback ? (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positiveReviews={positiveReviews}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
}
