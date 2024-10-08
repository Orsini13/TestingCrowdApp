import { animate, motion } from "framer-motion"

const animations ={
    initial: {opacity: 0,  x:100},
    animate: {opacity: 1,  x:0},
    exit: {opacity: 0,  x:-100},
}

const AnimatedPage = ({children}) => {
  return (
    <div>
        <motion.div variants={animations} initial="initial" animate='animate' exit='exit' transition={{duration: 0.7}}>
            {children}
        </motion.div>

    </div>
  )
}

export default AnimatedPage