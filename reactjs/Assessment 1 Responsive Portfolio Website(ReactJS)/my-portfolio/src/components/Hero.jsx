import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section>

      <motion.h1
        className="typing"
        initial={{opacity:0}}
        animate={{opacity:1}}
      >
        Hello I'm Darshan
      </motion.h1>

      <motion.p
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
      >
        React Developer Beginner
      </motion.p>

      <motion.button
        className="btn"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
      >
        View Projects
      </motion.button>

    </section>
  );
};

export default Hero;
