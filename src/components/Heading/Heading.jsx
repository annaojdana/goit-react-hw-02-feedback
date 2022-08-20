import PropTypes from 'prop-types';
import styles from './Heading.module.css';

export const Heading = ({ title }) => {
  const { heading } = styles;

  return <h2 className={heading}>{title}</h2>;
};

Heading.propTypes = {
  title: PropTypes.string,
};
