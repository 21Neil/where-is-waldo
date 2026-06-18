import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './LoadingOverlay.module.css';

const LoadingOverlay = () => {
  return (
    <div className={styles.overlay}>
      <LoadingSpinner color={'white'} />
    </div>
  );
};

export default LoadingOverlay;
