/* eslint-disable react/prop-types */
import styles from "./LinkBox.module.css";
import { motion } from "framer-motion";
export default function LinkBox({ link, children, id }) {
  const pageWidth = window.innerWidth;
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
      <a href={link} target="_blank">
        <h3>{children}</h3>
        {pageWidth > 550 && <p>{link}</p>}
      </a>
    </motion.div>
  );
}
