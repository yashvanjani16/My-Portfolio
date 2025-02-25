import React, { useRef } from 'react'
import AnimatedText from './AnimatedText'
import { motion } from 'framer-motion'


const hobbies = [
    {
        title: 'Fitness',
        emoji: '\u{1F3CB}',
        left: "5%",
        top: "10%",
    },
    {
        title: 'Gaming',
        emoji: '\u{1F3AE}',
        left: "39%",
        top: "5%",
    },
    {
        title: 'Research',
        emoji: '\u{1F52C}',
        left: "5%",
        top: "70%",
    },
    {
        title: 'Table Tennis',
        emoji: '\u{1F3D3}',
        left: "15%",
        top: "40%",
    },
    {
        title: 'Chess',
        emoji: '\u{265F}',
        left: "50%",
        top: "45%",
    },
    {
        title: 'Cricket',
        emoji: '\u{1F3CF}',
        left: "50%",
        top: "75%",
    },
    {
        title: 'Pool',
        emoji: '\u{1F3B1}',
        left: "65%",
        top: "30%",
    }
]

const Hobbies = () => {

    const constraintRef = useRef(null);

    return (
        <>
            <AnimatedText text="Beyond the Code" className='!text-5xl mt-64' />
            <p className='font-medium text-xl text-center'>Explore my interests and hobbies beyond the digital realm.</p>
            <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className='grid grid-cols-12 mt-10'>
                <div className='h-[250px] col-span-8 col-start-3 md:col-span-12 2xl:col-span-8 2xl:col-start-3 lg:col-span-10 lg:col-start-2 relative rounded-2xl border-2 border-solid border-dark p-8' ref={constraintRef}>
                    {
                        hobbies.map(hobby => (
                            <motion.div key={hobby.title} className='cursor-pointer absolute inline-flex items-center gap-2 px-8 bg-dark text-light rounded-full py-2.5 mb-8 mr-8 sm:px-4 xs:py-1'
                                style={{
                                    left: hobby.left,
                                    top: hobby.top
                                }}
                                drag
                                dragConstraints={constraintRef}
                            >
                                <span className='font-medium'>{hobby.title}</span>
                                <span>{hobby.emoji}</span>
                            </motion.div>
                        ))}
                </div>
            </motion.div>
        </>
    )
}

export default Hobbies
