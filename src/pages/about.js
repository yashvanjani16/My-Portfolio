import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';


const AnimatedNumber = () => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start({ count: 2, transition: { duration: 2 } });
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} className='flex flex-col items-end justify-center xl:items-center'>
            <motion.span
                className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'
                animate={controls}
                initial={{ count: 0 }}
                onUpdate={(latest) => setCount(Math.round(latest.count))}
            >
                {count}+
            </motion.span>
            <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                years of experience
            </h2>
        </div>
    );
};

//If there are multiple span containing different numbers//
const AnimatedNumber2 = ({ target }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start({ count: target, transition: { duration: 2 } });
        }
    }, [isInView, controls, target]);

    return (
        <motion.span
            ref={ref}
            className="inline-block text-7xl font-bold"
            animate={controls}
            initial={{ count: 0 }}
            onUpdate={(latest) => setCount(Math.round(latest.count))}
        >
            {count}+
        </motion.span>
    );
};

const ExperienceSection = () => {
    const stats = [
        { number: 4, label: "Years of Experience" },
        { number: 50, label: "Completed Projects" },
        { number: 20, label: "Happy Clients" },
    ];

    return (
        <div className="flex flex-wrap gap-10">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-end justify-center">
                    <AnimatedNumber target={stat.number} />
                    <h2 className="text-xl font-medium capitalize text-dark/75">
                        {stat.label}
                    </h2>
                </div>
            ))}
        </div>
    );
};

//If there are multiple span containing different numbers//

const about = () => {
    return (
        <>
            <Head>
                <title>My Portfolio | About Page</title>
                <meta name='description' content='My Portfolio website about page' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center '>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion drives excellence." className='!text-[5rem] mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='w-full grid grid-cols-8 gap-16 md:gap-8'>
                        <div className='col-span-4 flex flex-col items-start justify-start md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                                Biography
                            </h2>
                            <motion.p
                                initial={{ y: 50 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, type: "spring" }}
                                className='font-medium'>Hi, I&apos;m Yash Vanjani, a front-end developer passionate about crafting visually stunning, highly functional, and user-friendly digital experiences. With expertise in modern web technologies like HTML, CSS, JavaScript, React, and Tailwind CSS, I specialize in building responsive and accessible interfaces that enhance user engagement.</motion.p>
                            <motion.p
                                initial={{ y: 50 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, delay:"0.2", type: "spring" }}
                                className='my-4 font-medium'>My focus is on writing clean, efficient code that brings creative designs to life while optimizing performance and usability.</motion.p>
                            <motion.p
                                initial={{ y: 50 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, delay:"0.3", type: "spring" }}
                                className='font-medium'>I am committed to continuously refining my skills to build seamless, interactive websites. I look forward to the opportunity to apply my expertise and passion to your next project.</motion.p>
                        </div>
                        <div className='col-span-4 flex flex-col items-end justify-center md:col-span-8 md:items-center'>
                            <AnimatedNumber />
                        </div>
                    </div>
                    <Skills />
                    <Hobbies />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
