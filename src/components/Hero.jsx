import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import { profile } from "../data/portfolio";

const roles = [
  "Software Developer",
  "Java Full Stack Developer",
  "Web Developer",
  "Problem Solver"
];

function useTypingText(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay = deleting ? 42 : 82;
    const timeout = window.setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) window.setTimeout(() => setDeleting(true), 1100);
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (!next) {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
        }
      }
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypingText(roles);

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="hero-noise" />

      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.div
            className="availability-pill"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <span className="availability-dot" />
            <span>SOFTWARE DEVELOPMENT • BENGALURU, INDIA</span>
          </motion.div>

          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Sampat Laxman
            <span>Holabasappagol<span className="name-period">.</span></span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <span className="role-prefix">I&apos;m an</span>
            <span className="typed-role">{typed}<i className="typing-caret" /></span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a className="button button-primary" href="/sampat-resume.pdf" download>
              <Download size={17} /> Download Resume
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
          >
            <span className="social-label">CONNECT</span>
            <span className="social-line" />
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email">
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="art-orbit art-orbit--outer" />
          <div className="art-orbit art-orbit--inner" />
          <div className="art-spark art-spark--one"><Sparkles size={17} /></div>
          <div className="art-spark art-spark--two"><Code2 size={18} /></div>
          <div className="profile-card">
            <div className="profile-card-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span className="profile-card-label">DEV_PROFILE.EXE</span>
              <span className="profile-card-menu">•••</span>
            </div>
            <div className="profile-avatar-wrap">
              <div className="avatar-halo" />
              <div className="avatar-initials">SH</div>
              <span className="avatar-status" />
            </div>
            <div className="profile-card-name">Sampat Holabasappagol</div>
            <div className="profile-card-role">Aspiring Software Developer</div>
            <div className="profile-card-divider" />
            <div className="profile-code">
              <div><span className="code-muted">01</span><span className="code-purple">const</span> <span className="code-blue">focus</span> = <span className="code-green">&quot;Java&quot;</span>;</div>
              <div><span className="code-muted">02</span><span className="code-purple">const</span> <span className="code-blue">build</span> = <span className="code-green">&quot;Web Apps&quot;</span>;</div>
              <div><span className="code-muted">03</span><span className="code-purple">const</span> <span className="code-blue">mindset</span> = <span className="code-green">&quot;Keep Learning&quot;</span>;</div>
              <div><span className="code-muted">04</span><span className="code-purple">return</span> <span className="code-orange">growth</span>;</div>
            </div>
            <div className="profile-card-footer">
              <span><span className="footer-pulse" /> CONTINUOUS LEARNING</span>
              <span>IN</span>
            </div>
          </div>
          <div className="floating-chip floating-chip--java"><span className="chip-symbol">J</span> Java</div>
          <div className="floating-chip floating-chip--sql"><span className="chip-symbol">DB</span> SQL</div>
          <div className="floating-chip floating-chip--web"><span className="chip-symbol">&lt;/&gt;</span> Web</div>
          <div className="art-caption"><span>01 / 08</span><span>BUILD • LEARN • CREATE</span></div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span><ArrowDown size={15} />
      </a>
    </section>
  );
}
