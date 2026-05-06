import LoadingSpinner from "../../component/LoadingSpinner/LoadingSpinner";
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <main className={styles.container}>
      <LoadingSpinner />
    </main>
  )
}

export default Loading;
