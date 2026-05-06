import styles from './Hero.module.css'

const services = [
  'Website Design & Development',
  'Hosting & Email Setup',
  'Graphic Design',
  'Social Media Marketing',
  'SEO & Digital Marketing',
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.badge}>Professional Web Solutions</div>
        <h1 className={styles.heading}>
          Web Development<br />
          <span className={styles.accent}>Solutions</span>
        </h1>
        <ul className={styles.serviceList}>
          {services.map((s) => (
            <li key={s} className={styles.serviceItem}>
              <span className={styles.dot} />
              {s}
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a href="mailto:info@sbandywebservices.com" className={styles.btnPrimary}>
            Send Us a Mail
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Contact Now
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
