import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";

const Skills = () => {
  return (
    <section className="container mx-auto px-4 py-8 text-white">
      {" "}
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill) => (
          <motion.li
            key={skill}
            className="flex items-center py-2 px bg-black-100 rounded-md shadow-sm hover:bg-gray-600 p-4" // Dark theme classes
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-lg font-medium mr-2">{skill}</span>
            <motion.div
              className="w-full h-1 bg-blue-500 rounded-full" // Adjust for preferred color
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
