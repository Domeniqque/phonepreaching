import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles.section} style={{ textAlign: 'center' }}>
        <h1 className={styles.h1}>Phone Preaching</h1>

        <p className="description">
          Manage your random phone numbers
        </p>

        <div className={styles.content}>
          <img src="/img/landpage.png" alt="Home screen with list of registered numbers"/>
        </div>
      </section>

      <div className={styles.phraseBox}>
        <div>
          <h2>Phone Numbers</h2>
          <p>Easily create random lists of numbers and control the status of each call. Create by quantity or enter the first and last number in the list.</p>
        </div>

        <div>
          <h2>Interested People</h2>
          <p>Register interested people. Save information and notes.</p>
        </div>
        
        <div>
          <h2>Support</h2>
          <p>Support for Portuguese and English languages. Create numbers from more than 150 countries.</p>
        </div>
      </div>

      <h3 style={{ textAlign: 'center'}}>Available for iPhone, iPad and Android</h3>

      <div className={styles.badges}>
        <a href="https://apps.apple.com/us/app/id1524566605#?platform=iphone">
          <img src="/img/app-store-badge.svg" alt="Available for download on the App Store" />
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.appphonebook">
          <img src="/img/google-play-badge.png" alt="Available for download on the Google Play Store" />
        </a>
      </div>
    </>
  )
}

