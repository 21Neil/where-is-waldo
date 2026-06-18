import { useState } from 'react';
import styles from './FinishModal.module.css';
import modalStyles from '../Modal/ModalShare.module.css';
import { formatTime } from '../../utils/formatTime';
import { Link } from 'react-router';
import Modal from '../Modal/Modal';

const FinishModal = ({ isFinishModalOpen, score, onFinishModalSubmit, onViewLeaderboard }) => {
  const [formData, setFormData] = useState({
    name: '',
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
    onFinishModalSubmit(formData);
  };

  return (
    <Modal isOpen={isFinishModalOpen} header={'Finish!'} >
      <h4 className={styles.score}>Your Score: {formatTime(score)}</h4>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor='name'>Nickname</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={modalStyles.btnGroup}>
          <button type='button' onClick={onViewLeaderboard}>View Leaderboard</button>
          <button type='submit'>Save to Leaderboard</button>
        </div>
      </form>
    </Modal>
  );
};

export default FinishModal;
