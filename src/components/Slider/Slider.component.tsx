import "./Slider.styles.sass";
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    transition: {
      delay: 0.7,
    },
  },
  animate: {
    opacity: 0.5,
  },
  exit: {
    opacity: 0,
  },
};

const Slider: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="slider">
      <AnimatePresence>
        <motion.img
          className="slider__img"
          key={imageUrl}
          src={imageUrl}
          variants={variants}
          transition={{ duration: 0.7, type: "just" }}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
};

export default Slider;
