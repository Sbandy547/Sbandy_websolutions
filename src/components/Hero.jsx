import styles from './Hero.module.css'

const services = [
  'Custom Website Design & Development',
  'Domain Hosting & Professional Email Setup',
  'Logo & Graphic Design',
  'Social Media Marketing',
  'SEO & Digital Growth',
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.badge}>South African Web Professionals</div>
        <h1 className={styles.heading}>
          We Build Websites<br />
          That <span className={styles.accent}>Get Results</span>
        </h1>
        <p className={styles.subheading}>
          From startups to established businesses — we design, build, and launch professional websites tailored to your brand and goals.
        </p>
        <ul className={styles.serviceList}>
          {services.map((s) => (
            <li key={s} className={styles.serviceItem}>
              <span className={styles.dot} />
              {s}
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <a href="#portfolio" className={styles.btnPrimary}>
            View Our Work
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Get a Free Quote
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
