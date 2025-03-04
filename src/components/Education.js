import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-["80%"]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-mediu text-dark/75 xs:text-sm'>
                {time} | {place}
            </span>
        </motion.div>
    </li>

}

const Education = () => {
    
const ref = useRef(null);
const {scrollYProgress} = useScroll(
    {
        target:ref,
        offset:["start end","center start"]
    }
)

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
                <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details type="Bachelor of Technology in Computer Science & Engineering" time="2021-2023" place="Parul University" />

                    <Details type="Diploma in Computer Science & Engineering" time="2017-2020" place="Parul University" />
                    

                </ul>
            </div>
        </div>
    )
}

export default Education
