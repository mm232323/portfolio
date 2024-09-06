/* eslint-disable react/prop-types */
import styles from "./Project.module.css";
import LinkBox from "../ui/LinkBox/LinkBox";
import { motion } from "framer-motion";
export default function Project({ project, id }) {
  return (
    <motion.div
      className={styles.project}
      variants={{
        show: { y: 0, opacity: 1, filter: "blur(0)" },
        hide: { y: 130, opacity: 0, filter: "blur(15px)" },
      }}
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ delay: id * 0.15 }}
    >
      <motion.img
        src={project.img}
        variants={{
          show: { opacity: 1, filter: "blur(0)" },
          hide: { opacity: 0, filter: "blur(20px)" },
        }}
        initial="hide"
        animate="show"
        exit="hide"
      />
      <div className={styles.details}>
        <motion.h1
          variants={{
            show: { x: 0, opacity: 1, filter: "blur(0)" },
            hide: { x: 20, opacity: 0, filter: "blur(5px)" },
          }}
          initial="hide"
          animate="show"
          exit="hide"
        >
          {project.name}
        </motion.h1>
        <div className={styles.links}>
          <LinkBox link={project.links.live} id={1}>
            Live
          </LinkBox>
          <LinkBox link={project.links.repo1} id={2}>
            repository 1
          </LinkBox>
          <LinkBox link={project.links.repo2} id={3}>
            repository 2
          </LinkBox>
        </div>
      </div>
    </motion.div>
  );
}
