import styles from './Wrapper.module.css';
import { Heading } from 'components/Heading/Heading';
import { Votes } from 'components/Votes/Votes';

export const Wrapper = () => {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <Heading title="Please leave feedback" />
      <Votes></Votes>
    </div>
  );
};
