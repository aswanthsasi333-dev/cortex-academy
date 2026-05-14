import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const PageTransition = ({
  children,
}: Props) => {

  return (

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.98,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="w-full"
    >
      {children}
    </motion.div>

  );

};

export default PageTransition;