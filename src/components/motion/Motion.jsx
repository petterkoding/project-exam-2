import React from 'react'
import { motion } from "framer-motion";

const Motion = ({children}) => {
  return (
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ ease: [0,.13,.43,.98], duration: 0.5, delay: 0.2}}>
          {children}
      </motion.div>
  )
}

export default Motion