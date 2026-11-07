import { motion } from "framer-motion";
import { Award, CalendarDays, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <SectionHeading
          eyebrow="CONTINUOUS LEARNING"
          title={<>Certifications that mark <span className="gradient-text">the journey.</span></>}
          description="Courses and certifications included in my resume."
        />

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.article
              className="cert-card"
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <div className="cert-card-top">
                <span className="cert-icon"><Award size={20} /></span>
                <span className="cert-code">{cert.code}</span>
              </div>
              <div className="cert-date"><CalendarDays size={14} /> {cert.date}</div>
              <h3>{cert.title}</h3>
              <p>{cert.institution}</p>
              <span className="cert-location"><MapPin size={13} /> {cert.location}</span>
              <div className="cert-bottom-line" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
