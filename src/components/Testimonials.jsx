import { Star, ExternalLink } from 'lucide-react'
import styles from './Testimonials.module.css'

const clients = [
  {
    name: 'Jobs Ready',
    url: 'https://jobsready.co.za',
    category: 'Job Portal',
    note: 'Full job portal platform connecting employers and candidates across South Africa.',
  },
  {
    name: 'Gus Marine',
    url: 'https://gusmarine.co.za/',
    category: 'Marine Services',
    note: 'Professional online presence for a South African marine services company.',
  },
  {
    name: 'JB Technical Services',
    url: 'https://jbtechnicalservices.co.za/',
    category: 'Technical Services',
    note: 'Business website driving enquiries for an electrical and technical solutions provider.',
  },
  {
    name: 'MK Web Solutions',
    url: 'https://www.mkwebsolutions.co.za/',
    category: 'Web Agency',
    note: 'Clean agency website helping MK Web Solutions showcase their work and attract clients.',
  },
  {
    name: 'Shibu Tech',
    url: 'http://shibu-tech.jobsready.co.za/',
    category: 'Technology Company',
    note: 'Corporate technology company website built on the Jobs Ready platform.',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Trusted By</span>
          <h2 className={styles.title}>Clients We've Worked With</h2>
          <p className={styles.subtitle}>Real businesses. Real websites. Real results.</p>
        </div>
        <div className={styles.grid}>
          {clients.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f97316" color="#f97316" />
                  ))}
                </div>
                <ExternalLink size={16} className={styles.extIcon} />
              </div>
              <h3 className={styles.clientName}>{c.name}</h3>
              <span className={styles.category}>{c.category}</span>
              <p className={styles.note}>{c.note}</p>
              <span className={styles.visitLink}>Visit site ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
