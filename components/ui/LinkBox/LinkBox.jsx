/* eslint-disable react/prop-types */
import styles from "./LinkBox.module.css";
import { motion } from "framer-motion";
export default function LinkBox({ link, children, id }) {
  return (
    <motion.div
      className={styles.linkbox}
      variants={{
        show: { y: 0, opacity: 1, filter: "blur(0)" },
        hide: { y: 30, opacity: 0, filter: "blur(15px)" },
      }}
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ delay: 0.1 * id }}
    >
      <h3>{children}</h3>
      <a href={link} target="_blank">
        <p>{link}</p>
      </a>
    </motion.div>
  );
}
