import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export const Reveal = ({ children, delay = 0, className, as = "div" }: RevealProps) => {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export const Stagger = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
