import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Phone Preaching</h1>

      <p className="description">
        Manage your random phone numbers
      </p>

      <div className={styles.content}>
        <img src="/img/landpage.png" alt="Home screen with list of registered numbers"/>
      </div>

      <p>Create random lists of phone numbers in over 150 countries</p>
    </section>
  )
}

