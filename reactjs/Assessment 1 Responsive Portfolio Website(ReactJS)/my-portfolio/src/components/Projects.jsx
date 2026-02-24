import { motion } from "framer-motion";

const Projects = () => {

  const data=[
    {name:"Doctor Booking",desc:"Online system"},
    {name:"IoT LED App",desc:"ESP8266 Flutter"}
  ];

  return(
    <section id="projects">

      <h2>Projects</h2>

      <div className="grid">

        {data.map(({name,desc})=>(
          <motion.div
            className="card"
            key={name}

            initial={{x:-80,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.6}}
            whileHover={{scale:1.05}}
          >
            <h3>{name}</h3>
            <p>{desc}</p>
          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Projects;
