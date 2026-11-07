import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
