/* eslint-disable react/prop-types */
import styles from "./Skill.module.css";
import { motion, AnimatePresence } from "framer-motion";
export default function Skill({ skill, id, scrollY }) {
  return (
    <AnimatePresence>
      {scrollY >= 1180 && (
        <motion.div
          className={id % 2 == 0 ? styles.leftskill : styles.rightskill}
          style={{ backgroundColor: skill.color }}
          variants={{
            show: { width: 383, filter: "blur(0)", opacity: 1 },
            hide: { width: 0, filter: "blur(20px)", opacity: 0 },
          }}
          initial="hide"
          animate="show"
          exit={{ width: 0, filter: "blur(20px)" }}
          transition={{ type: "tween" }}
        >
          <img src={skill.img} />
          <h1>{skill.name}</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
