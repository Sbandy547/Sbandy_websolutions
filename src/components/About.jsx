import { CheckCircle } from 'lucide-react'
import styles from './About.module.css'

const points = [
  'Over 5 years of hands-on web development experience',
  'Responsive, mobile-first designs built for all devices',
  'Fast delivery with continued post-launch support',
  'Affordable, transparent pricing — no hidden costs',
  'Local South African expertise with international quality',
]

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imgWrapper}>
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=700&q=80"
              alt="Professional web development"
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
          <h2 className={styles.title}>Your Dedicated<br/>Digital Growth Partner</h2>
          <p className={styles.para}>
            At Sbandy Web Services, we don't just build websites — we build your digital presence. We work closely with every client to understand their business, their customers, and their goals before writing a single line of code.
          </p>
          <p className={styles.para}>
            Based in South Africa, we specialize in helping small and medium businesses establish a strong, professional online presence that drives real growth.
          </p>
          <ul className={styles.list}>
            {points.map((p) => (
              <li key={p} className={styles.listItem}>
                <CheckCircle size={18} color="#3b9eff" className={styles.check} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.cta}>Start Your Project</a>
        </div>
      </div>
    </section>
  )
}
