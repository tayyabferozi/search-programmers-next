import React, { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-wrap">
      <div
        className={clsx(isActive && "active", "accordion-head")}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        {title}
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            className="accordion-body"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1 },
              collapsed: { opacity: 0 },
            }}
            transition={{ ease: "linear" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
