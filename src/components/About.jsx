import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Code2, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const highlights = [
  { icon: BookOpen, value: "B.E.", label: "Bachelor of Engineering" },
  { icon: BriefcaseBusiness, value: "2026", label: "Internship experience" },
  { icon: Code2, value: "02", label: "Featured projects" }
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title={<>Building a strong foundation.<br /><span className="gradient-text">One project at a time.</span></>}
          description="A quick introduction to my learning journey, technical interests and the direction I want to grow."
        />

        <div className="about-layout">
          <motion.div
            className="about-main glass-panel"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="panel-index">01 — PROFILE</div>
            <h3>Curious by nature.<br /><span className="gradient-text">Developer in progress.</span></h3>
            <p>{profile.about}</p>
            <p>{profile.goal}</p>
            <a className="text-link" href="#projects">Explore my projects <ArrowUpRight size={16} /></a>
            <div className="about-watermark">SH</div>
          </motion.div>

          <div className="about-side">
            {highlights.map(({ icon: Icon, value, label }, index) => (
              <motion.div
                className="highlight-card"
                key={label}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.55 }}
              >
                <span className="highlight-icon"><Icon size={19} /></span>
                <div><strong>{value}</strong><span>{label}</span></div>
              </motion.div>
            ))}
            <motion.div
              className="goal-card"
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36, duration: 0.55 }}
            >
              <span className="goal-icon"><Target size={19} /></span>
              <span className="goal-label">CURRENT DIRECTION</span>
              <strong>Java Full Stack Development</strong>
              <span className="goal-note">Learning, building and improving.</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
