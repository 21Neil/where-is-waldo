import styles from './Modal.module.css';

const Modal = ({ isOpen, header, children }) => {
  return (
    <div className={styles.modal + ' ' + (isOpen ? styles.show : '')}>
      <div className={styles.modalContentContainer}>
        <div className={styles.modalContent}>
          <h3 className={styles.modalHeader}>{header}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
