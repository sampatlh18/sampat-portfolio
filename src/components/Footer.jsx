import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">SH<span>.</span></span>
          <span className="brand-copy">SAMPAT<span> / PORTFOLIO</span></span>
        </a>
        <p>Designed to share my learning journey and development work.</p>
        <div className="footer-right">
          <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="#home" className="footer-top-link">BACK TO TOP <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sampat Laxman Holabasappagol</span><span>BUILT WITH PURPOSE <i>✦</i></span></div>
    </footer>
  );
}
