import styles from './Loading.module.css';

const Loading = () => {
  return (
    <main className={styles.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={styles.loaderCircle}
      >
        <path d='M21 12a9 9 0 1 1-6.219-8.56' />
      </svg>
    </main>
  );
};

export default Loading;
