import { motion } from "framer-motion";
import { Code2, Database, Globe2, Lightbulb, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

const icons = [Code2, Globe2, Database, Lightbulb];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title={<>Technologies I work <span className="gradient-text">with.</span></>}
          description="A snapshot of the technical skills listed in my resume, grouped by area."
          align="center"
        />

        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                className="skill-card"
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.09, duration: 0.55 }}
                whileHover={{ y: -7 }}
              >
                <div className="skill-card-top">
                  <span className="skill-icon"><Icon size={20} /></span>
                  <span className="skill-card-count">0{index + 1}</span>
                </div>
                <h3>{group.category}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
                </div>
                <div className="skill-card-bottom"><span /><Sparkles size={14} /></div>
              </motion.article>
            );
          })}
        </div>

        <div className="skills-note">
          <span className="note-mark"><Sparkles size={15} /></span>
          Skills are presented without percentage ratings so the portfolio does not imply unverified proficiency scores.
        </div>
      </div>
    </section>
  );
}
