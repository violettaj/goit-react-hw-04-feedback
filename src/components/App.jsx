import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good * 100) / total);

  const onLeaveFeedback = option => {
    setFeedback({ ...feedback, [option]: feedback[option] + 1 });
  };

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Section title="Statistics" />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
