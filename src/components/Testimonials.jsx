import { Star } from 'lucide-react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Thabo Mokoena',
    role: 'Small Business Owner',
    text: 'Sbandy Web Services transformed our online presence completely. Our website now looks professional and we\'ve seen a 60% increase in enquiries.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    name: 'Naledi Dlamini',
    role: 'Founder, Beauty Studio',
    text: 'The team delivered our website on time and beyond expectations. The design is stunning and our clients love it. Highly recommended!',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    name: 'Sipho Nkosi',
    role: 'Restaurant Manager',
    text: 'From the logo design to the website and social media setup — everything was handled professionally. Sbandy is our go-to digital partner.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Client Reviews</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div className={styles.card} key={t.name}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f97316" color="#f97316" />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <img src={t.img} alt={t.name} className={styles.avatar} />
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
