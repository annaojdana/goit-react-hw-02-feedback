
import styles from './Votes.module.css';
import { Button } from 'components/Button/Button';
import good from '../../images/good.png';
import neutral from '../../images/neutral.png';
import bad from '../../images/bad.png';

export const Votes = () => {
  const { votes__wrapper } = styles;

  return (
    <div className={votes__wrapper}>
      <Button title="good" img={good}></Button>
      <Button title="neutral" img={neutral}></Button>
      <Button title="bad" img={bad}></Button>
    </div>
  );
};
