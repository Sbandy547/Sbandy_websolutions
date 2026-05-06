import { CheckCircle } from 'lucide-react'
import styles from './About.module.css'

const points = [
  'Over 5 years of web development experience',
  'Responsive designs that work on all devices',
  'Fast turnaround times with ongoing support',
  'Affordable packages for small & medium businesses',
  'Local expertise with a global standard of quality',
]

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
              alt="Team working on web solutions"
              className={styles.img}
            />
            <div className={styles.badge}>
              <span className={styles.badgeNum}>5+</span>
              <span className={styles.badgeText}>Years of<br/>Experience</span>
            </div>
          </div>
        </div>
        <div className={styles.textCol}>
          <span className={styles.tag}>About Us</span>
          <h2 className={styles.title}>Your Trusted Digital<br/>Partner in Growth</h2>
          <p className={styles.para}>
            At Sbandy Web Services, we are passionate about helping businesses establish and grow their online presence. We combine creativity with technical excellence to deliver results that matter.
          </p>
          <ul className={styles.list}>
            {points.map((p) => (
              <li key={p} className={styles.listItem}>
                <CheckCircle size={20} color="#0a2a6e" className={styles.check} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.cta}>Work With Us</a>
        </div>
      </div>
    </section>
  )
}
