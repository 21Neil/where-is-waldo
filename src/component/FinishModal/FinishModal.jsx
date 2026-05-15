import { useState } from 'react';
import styles from './FinishModal.module.css';
import { formatTime } from '../../utils/formatTime';

const FinishModal = ({ isGameOver, score }) => {
  const [formData, setFormData] = useState({
    nickname: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    console.log('submit', formData);
  };

  return (
    <div className={styles.modal + ' ' + (isGameOver ? styles.show : '')}>
      <div className={styles.modalContentContainer}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalHeader}>Finish!</h3>
          <h4 className={styles.modalScore}>Your Score: {formatTime(score)}</h4>
          <form className={styles.modalForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor='nickname'>Nickname</label>
              <input
                type='text'
                id='nickname'
                name='nickname'
                onChange={handleChange}
              />
            </div>
            <div className={styles.btnGroup}>
              <button type='button'>Back to menu</button>
              <button type='submit'>Save to Leaderboard</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FinishModal;
