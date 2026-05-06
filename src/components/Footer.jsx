import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#f8fafc" />
        </svg>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}><span>S</span></div>
              <div>
                <span className={styles.logoBrand}>SBANDY</span>
                <span className={styles.logoSub}>WEB SERVICES</span>
              </div>
            </div>
            <p className={styles.tagline}>
              Professional web solutions that help your business grow online. From design to development, we've got you covered.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className={styles.social} aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className={styles.social} aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className={styles.social} aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.colList}>
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">Hosting & Email Setup</a></li>
              <li><a href="#services">Graphic Design</a></li>
              <li><a href="#services">Social Media Marketing</a></li>
              <li><a href="#services">SEO & Digital Marketing</a></li>
              <li><a href="#services">Marketing Videos</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.colList}>
              <li>
                <a href="mailto:info@sbandywebservices.com">
                  <Mail size={14} style={{ marginRight: 6 }} />
                  info@sbandywebservices.com
                </a>
              </li>
              <li>
                <a href="tel:+27000000000">
                  <Phone size={14} style={{ marginRight: 6 }} />
                  +27 (0) 00 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Sbandy Web Services. All rights reserved.</p>
          <p>Designed & Developed by Sbandy Web Services</p>
        </div>
      </div>
    </footer>
  )
}
