import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="WHERE I'M GROWING"
          title={<>Professional <span className="gradient-text">experience.</span></>}
          description="My current internship and the practical learning I am building through it."
        />

        <motion.div
          className="experience-card glass-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <div className="experience-rail">
            <span className="experience-rail-dot" />
            <span className="experience-rail-line" />
          </div>
          <div className="experience-content">
            <div className="experience-topline">
              <span className="experience-type"><BriefcaseBusiness size={14} /> INTERNSHIP</span>
              <span className="current-badge"><i /> PRESENT</span>
            </div>
            <h3>{experience.position}</h3>
            <div className="experience-company">{experience.company}</div>
            <div className="experience-meta">
              <span><CalendarDays size={15} /> {experience.duration}</span>
              <span><MapPin size={15} /> {experience.location}</span>
            </div>
            <p>{experience.description}</p>
            <div className="experience-focus">
              <span className="focus-label">LEARNING FOCUS</span>
              {experience.focus.map((item) => <span className="focus-chip" key={item}>{item}</span>)}
            </div>
          </div>
          <div className="experience-watermark">K</div>
        </motion.div>
      </div>
    </section>
  );
}
