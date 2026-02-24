import { motion } from "framer-motion";

const Skills = () => {

  const skills=["HTML","CSS","JavaScript","React","SQL"];

  return(
    <section id="skills">

      <h2>Skills</h2>

      <div className="grid">

        {skills.map(skill=>(
          <motion.div
            className="card"
            key={skill}

            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.4}}
            whileHover={{rotate:3}}
          >
            {skill}
          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Skills;
