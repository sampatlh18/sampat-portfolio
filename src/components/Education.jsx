import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <SectionHeading
          eyebrow="ACADEMIC BACKGROUND"
          title={<>Education & <span className="gradient-text">learning.</span></>}
          description="The academic milestones listed in my resume."
          align="center"
        />

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.article
              className={`education-card ${index === 0 ? "education-card-primary" : ""}`}
              key={item.qualification}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div className="education-marker"><GraduationCap size={19} /></div>
              <div className="education-card-top"><span>{item.detail}</span><b>{item.year}</b></div>
              <h3>{item.qualification}</h3>
              <div className="education-institution">{item.institution}</div>
              <div className="education-location"><MapPin size={14} /> {item.location}</div>
              <div className="education-result"><span>RESULT</span><strong>{item.result}</strong></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
