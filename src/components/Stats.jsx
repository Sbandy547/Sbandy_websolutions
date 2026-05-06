import styles from './Stats.module.css'

const stats = [
  { num: '5+', label: 'Live Client Websites' },
  { num: '100%', label: 'Client Satisfaction' },
  { num: '5+', label: 'Years Experience' },
  { num: '24/7', label: 'Support Available' },
]

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((s) => (
          <div className={styles.item} key={s.label}>
            <span className={styles.num}>{s.num}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
