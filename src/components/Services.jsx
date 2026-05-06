import { Monitor, Globe, PenTool, Share2, Mail, TrendingUp } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    icon: Monitor,
    title: 'Website Design & Development',
    desc: 'We build fast, modern, and responsive websites tailored to your business needs — from landing pages to full e-commerce platforms.',
    color: '#0a2a6e',
  },
  {
    icon: Globe,
    title: 'Hosting & Email Setup',
    desc: 'Reliable web hosting and professional email setup so your business is always online and communicating professionally.',
    color: '#e84c3d',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Eye-catching logos, branding kits, banners, and print materials that make your brand stand out from the crowd.',
    color: '#f97316',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    desc: 'Strategic social media management and content creation that grows your audience and drives real engagement.',
    color: '#0a2a6e',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Digital Marketing',
    desc: 'Boost your search rankings and online visibility with proven SEO strategies and targeted digital campaigns.',
    color: '#e84c3d',
  },
  {
    icon: Mail,
    title: 'Marketing Videos',
    desc: 'Professional marketing videos and animations that captivate your audience and convert viewers into customers.',
    color: '#f97316',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>What We Offer</span>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Everything your business needs to succeed online — under one roof.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div className={styles.card} key={service.title}>
                <div className={styles.iconWrap} style={{ background: service.color }}>
                  <Icon size={28} color="white" />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <a href="#contact" className={styles.cardLink}>
                  Learn More →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
