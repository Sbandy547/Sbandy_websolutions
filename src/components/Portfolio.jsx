import styles from './Portfolio.module.css'

const projects = [
  {
    title: 'E-Commerce Store',
    category: 'Web Development',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80',
  },
  {
    title: 'Corporate Website',
    category: 'Web Design',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80',
  },
  {
    title: 'Brand Identity',
    category: 'Graphic Design',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80',
  },
  {
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=80',
  },
  {
    title: 'Restaurant Website',
    category: 'Web Development',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80',
  },
  {
    title: 'Real Estate Portal',
    category: 'Web Design',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80',
  },
]

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Our Work</span>
          <h2 className={styles.title}>Website Portfolio</h2>
          <p className={styles.subtitle}>A showcase of our recent projects across various industries.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div className={styles.card} key={p.title}>
              <div className={styles.imgWrap}>
                <img src={p.img} alt={p.title} className={styles.img} />
                <div className={styles.overlay}>
                  <span className={styles.viewBtn}>View Project</span>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{p.category}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
