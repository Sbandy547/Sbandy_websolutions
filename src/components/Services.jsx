import { Monitor, Globe, PenTool, Share2, Video, TrendingUp } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    desc: 'Custom, fast, mobile-first websites built to reflect your brand and convert visitors into customers — from landing pages to full portals.',
    color: '#0d1b2e',
  },
  {
    icon: Globe,
    title: 'Hosting & Email Setup',
    desc: "Reliable South African hosting and professional business email so you're always online and communicate with confidence.",
    color: '#e84c3d',
  },
  {
    icon: PenTool,
    title: 'Graphic Design & Branding',
    desc: 'Logos, brand identity kits, banners, and print materials that make your business look professional from day one.',
    color: '#f97316',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Consistent, engaging content and targeted campaigns that grow your audience and keep your brand visible online.',
    color: '#0d1b2e',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    desc: 'Get found on Google. We use proven SEO strategies and digital advertising to drive qualified traffic to your website.',
    color: '#e84c3d',
  },
  {
    icon: Video,
    title: 'Marketing Videos',
    desc: 'Short, professional marketing videos and animations that grab attention and communicate your message clearly.',
    color: '#f97316',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>What We Do</span>
          <h2 className={styles.title}>Services We Offer</h2>
          <p className={styles.subtitle}>
            Everything your business needs to build a strong online presence — all under one roof.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div className={styles.card} key={service.title}>
                <div className={styles.iconWrap} style={{ background: service.color }}>
                  <Icon size={26} color="white" strokeWidth={1.8} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <a href="#contact" className={styles.cardLink}>
                  Enquire Now →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
