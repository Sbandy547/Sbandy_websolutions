import { Check } from 'lucide-react'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Basic',
    price: 'R2,500',
    tag: 'Perfect for personal brands',
    color: 'basic',
    features: [
      '1–3 pages',
      'Mobile responsive design',
      'Contact form & WhatsApp button',
      'Basic UI design',
      'Social media links',
    ],
  },
  {
    name: 'Standard',
    price: 'R7,500',
    tag: 'Best for small businesses',
    color: 'standard',
    featured: true,
    features: [
      '4–7 pages',
      'Custom modern design',
      'Contact forms + email integration',
      'Basic SEO setup (Google visibility)',
      'WhatsApp integration',
      'Speed optimization',
    ],
  },
  {
    name: 'Premium',
    price: 'R15,000',
    tag: 'Best for serious businesses',
    color: 'premium',
    features: [
      '8–15+ pages',
      'Advanced UI/UX design',
      'Full SEO optimization',
      'Booking / advanced features',
      'Database or admin panel (if needed)',
      'Performance & security optimization',
      'Priority support',
    ],
  },
]

const extras = [
  { item: 'Extra page', price: 'R500/page' },
  { item: 'Logo design', price: 'R1,000' },
  { item: 'Hosting setup', price: 'R800' },
  { item: 'Monthly maintenance', price: 'R500/month' },
  { item: 'Domain setup', price: 'R200/year' },
]

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Transparent Pricing</span>
          <h2 className={styles.title}>Website Packages</h2>
          <p className={styles.subtitle}>No hidden costs. No surprises. Just honest pricing for quality work.</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.featured && <div className={styles.popularBadge}>Most Popular</div>}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.price}>{plan.price}</div>
                <p className={styles.planTag}>{plan.tag}</p>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Check size={16} className={styles.check} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/27662002472?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} website package (${plan.price}). Can we chat?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta} ${plan.featured ? styles.ctaFeatured : ''}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className={styles.extras}>
          <h3 className={styles.extrasTitle}>Additional Services</h3>
          <div className={styles.extrasGrid}>
            {extras.map((e) => (
              <div key={e.item} className={styles.extraItem}>
                <span className={styles.extraName}>{e.item}</span>
                <span className={styles.extraPrice}>{e.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
