import { ExternalLink } from 'lucide-react'
import styles from './Portfolio.module.css'

const projects = [
  {
    title: 'Jobs Ready',
    category: 'Job Portal & Career Platform',
    url: 'https://jobsready.co.za',
    desc: 'Full-featured job portal connecting employers and job seekers across South Africa.',
    thumb: 'https://image.thum.io/get/width/600/crop/400/noanimate/https://jobsready.co.za',
  },
  {
    title: 'Shibu Tech – Jobs Ready',
    category: 'Corporate Website',
    url: 'http://shibu-tech.jobsready.co.za/',
    desc: 'Professional corporate website for Shibu Tech, hosted on the Jobs Ready platform.',
    thumb: 'https://image.thum.io/get/width/600/crop/400/noanimate/http://shibu-tech.jobsready.co.za/',
  },
  {
    title: 'MK Web Solutions',
    category: 'Web Agency Website',
    url: 'https://www.mkwebsolutions.co.za/',
    desc: 'Clean and modern website for MK Web Solutions showcasing their digital services.',
    thumb: 'https://image.thum.io/get/width/600/crop/400/noanimate/https://www.mkwebsolutions.co.za/',
  },
  {
    title: 'Gus Marine',
    category: 'Marine Industry Website',
    url: 'https://gusmarine.co.za/',
    desc: 'Professional website for Gus Marine — a marine services and boat repair company.',
    thumb: 'https://image.thum.io/get/width/600/crop/400/noanimate/https://gusmarine.co.za/',
  },
  {
    title: 'JB Technical Services',
    category: 'Technical Services Website',
    url: 'https://jbtechnicalservices.co.za/',
    desc: 'Business website for JB Technical Services covering electrical and technical solutions.',
    thumb: 'https://image.thum.io/get/width/600/crop/400/noanimate/https://jbtechnicalservices.co.za/',
  },
]

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Real Client Work</span>
          <h2 className={styles.title}>Our Portfolio</h2>
          <p className={styles.subtitle}>Live websites we have designed, built, and launched for our clients.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div className={styles.card} key={p.title}>
              <div className={styles.imgWrap}>
                <img src={p.thumb} alt={p.title} className={styles.img} />
                <div className={styles.overlay}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                    <ExternalLink size={16} />
                    Visit Site
                  </a>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
                  {p.url.replace(/^https?:\/\//, '')} ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
