import styles from './Hero.module.css'

const services = [
  'Website Designs & Development',
  'Hosting & Email Setup',
  'Graphic Design',
  'Social Media Marketing',
  "Marketing Video's",
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Web<br />Development<br />Solutions
        </h1>
        <ul className={styles.serviceList}>
          {services.map((s) => (
            <li key={s} className={styles.serviceItem}>{s}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a href="mailto:info@sbandywebservices.co.za" className={styles.btnOutline}>
            SEND US A MAIL
          </a>
          <a href="#contact" className={styles.btnOutline}>
            CONTACT NOW
          </a>
        </div>
      </div>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
