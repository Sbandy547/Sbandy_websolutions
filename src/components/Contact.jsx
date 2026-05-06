import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Get In Touch</span>
          <h2 className={styles.title}>Let's Build Something</h2>
          <p className={styles.subtitle}>Ready to start? Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>We'd Love to Hear From You</h3>
            <p className={styles.infoText}>
              Whether you need a brand new website, a redesign, hosting, or ongoing digital marketing support — we're here to help your business grow online. No jargon, just honest advice.
            </p>
            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><Mail size={20} /></div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:info@sbandywebservices.co.za" className={styles.contactVal}>info@sbandywebservices.co.za</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><Phone size={20} /></div>
                <div>
                  <span className={styles.contactLabel}>Phone / WhatsApp</span>
                  <a href="tel:+27000000000" className={styles.contactVal}>+27 (0) 00 000 0000</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><MapPin size={20} /></div>
                <div>
                  <span className={styles.contactLabel}>Based In</span>
                  <span className={styles.contactVal}>South Africa 🇿🇦</span>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {sent && (
              <div className={styles.success}>
                ✅ Message received! We'll be in touch within 24 hours.
              </div>
            )}
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Phone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+27 ..."
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>What Do You Need?</label>
                <select name="service" value={form.service} onChange={handleChange} className={styles.input}>
                  <option value="">Select a service</option>
                  <option value="web-dev">Website Development</option>
                  <option value="hosting">Hosting & Email Setup</option>
                  <option value="graphic">Graphic Design & Branding</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="seo">SEO & Digital Marketing</option>
                  <option value="video">Marketing Videos</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Tell Us About Your Project</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your business, what you need, your budget, timeline..."
                className={`${styles.input} ${styles.textarea}`}
                rows={5}
                required
              />
            </div>
            <button type="submit" className={styles.submit}>
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
