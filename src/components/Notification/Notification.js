import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <span className={css.notification}>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
