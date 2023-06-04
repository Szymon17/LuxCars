import "./CustomLink.styles.sass";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

type LinkProps = { cssClass?: string; to: string; children: any; animationType?: "underline" | "bounce" };

const animations = {
  underline: {
    on: {
      width: "100%",
    },
    off: {
      width: 0,
    },
  },

  bounce: {
    scale: 1.2,
    transition: {
      damping: 100,
      bouncing: 10,
      stiffness: 50,
    },
  },
};

const CustomLink: FC<LinkProps> = ({ cssClass, to, children, animationType }) => {
  const [animationOn, setAnimationState] = useState(false);

  if (animationType === "bounce")
    return (
      <motion.div whileHover={animations.bounce} className={`${cssClass ? "link " + cssClass : "link"}`}>
        <Link to={to}>{children}</Link>
      </motion.div>
    );
  else
    return (
      <div
        onMouseEnter={() => setAnimationState(true)}
        onMouseOut={() => setAnimationState(false)}
        className={`${cssClass ? "link " + cssClass : "link"}`}
      >
        <Link to={to}>{children}</Link>
        <motion.div className="link__underline" animate={animationOn ? animations.underline.on : animations.underline.off} />
      </div>
    );
};

export default CustomLink;
