import { motion, useReducedMotion } from "framer-motion";

const particles = [
  [7, 18, 3, 8.5, 0.1], [15, 71, 2, 7.2, 1.3], [24, 34, 2, 9.1, 2.1],
  [31, 84, 3, 8.2, 0.7], [39, 14, 2, 7.8, 2.7], [47, 58, 2, 9.4, 1.8],
  [55, 26, 3, 8.7, 0.4], [63, 78, 2, 7.6, 2.4], [71, 39, 2, 9.2, 1.1],
  [79, 13, 3, 8.1, 2.9], [87, 66, 2, 7.9, 0.8], [94, 31, 2, 9.5, 1.9],
  [11, 48, 2, 8.8, 3.1], [28, 8, 2, 7.5, 1.6], [68, 91, 3, 8.9, 0.3],
  [91, 86, 2, 7.7, 2.2]
];

export default function FloatingParticles() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ambient-particles" aria-hidden="true">
      {particles.map(([left, top, size, duration, delay], index) => (
        <motion.span
          key={index}
          className="ambient-particle"
          style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
          animate={reduceMotion ? undefined : {
            y: [0, -18, 5, 0],
            x: [0, 8, -5, 0],
            opacity: [0.12, 0.65, 0.2, 0.12],
            scale: [0.8, 1.25, 0.9, 0.8]
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
