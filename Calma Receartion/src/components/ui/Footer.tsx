import { Link } from 'react-router-dom'
import logoC from '@/assets/Logos/BRANDMARK_01-p-2000.png'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="footer-brand">
            <img src={logoC} alt="Calma" className="footer-logo" />
            <div className="footer-title">Calma</div>
            <div className="footer-subtitle">Where vision takes shape</div>
          </div>
          <p className="footer-text">
            Premium real estate crafted with precision, sustainability, and timeless elegance.
          </p>
        </div>
        <nav className="footer-col" aria-label="Footer navigation">
          <div className="footer-heading">Explore</div>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/register">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer-col">
          <div className="footer-heading">Connect</div>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" className="footer-icon" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="footer-icon" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-icon" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <a href="https://x.com" aria-label="X" className="footer-icon" target="_blank" rel="noreferrer">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-rule" />
        <div className="footer-note">© {new Date().getFullYear()} Calma. All rights reserved.</div>
      </div>
    </footer>
  )
}
