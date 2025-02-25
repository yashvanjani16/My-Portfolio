import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import project1 from "../../public/images/project-2.png";
import project2 from "../../public/images/project-1.png";
import project3 from "../../public/images/project-3.png";
import project4 from "../../public/images/project-4.png";
import project5 from "../../public/images/project-5.png";
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({img, summary, link, title}) =>{
  
  return(
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
    <Link href={link} aria-label={title} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
    <FramerImage src={img} alt={title} className="w-full h-auto" 
    whileHover={{scale:1.05}}
    transition={{duration:0.2}}
    />
    </Link>
    <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
     <h2 className='mb-2 w-full text-primary text-2xl font-bold sm:text-sm'>{title}</h2>
      <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>
      <div className='mt-2'>
        <Link aria-label={title} href={link} target='_blank' className='rounded-lg bg-dark text-light p-2 text-lg font-semibold sm:px-4 sm:text-base'>Visit Project</Link>
      </div>
    </div>
    </article>
  )
}

const Project = ({title, img, link}) => {
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light relative p-6 xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
    <Link aria-label={title} href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
    <FramerImage src={img} alt={title} className="w-full h-[200px] lg:h-[100px] md:h-auto" 
    whileHover={{scale:1.05}}
    transition={{duration:0.2}}
    />
    </Link>
    <div className='w-full flex flex-col items-start justify-between mt-4'>
     <h2 className='mb-2 w-full text-primary text-xl font-bold lg:text-2xl'>{title}</h2>
      <div className='mt-2'>
        <Link aria-label={title} href={link} target='_blank' className='p-2 text-lg font-semibold underline md:text-base'>Visit</Link>
      </div>
    </div>
    </article>
  )
}

const projects = () => {
  
  return (
    <>
      <Head>
        <title>My Portfolio | Projects Page</title>
        <meta name='description' content='My Portfolio website projects page' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Curiosity sparks genius!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
            <FeaturedProject title="Project 1" img={project1} summary="My company's project based on the Sitecore CMS, utilizing C# Razor code along with various front-end technologies. The implementation follows best practices to ensure scalability, performance, and maintainability." link="https://www.angloamerican.com/"/>
            </div>
            <div className='col-span-6 md:col-span-12'>
            <Project title="Project 2" img={project2} link="https://www.hgcapitaltrust.com/"/>
            </div>
            <div className='col-span-6 md:col-span-12'>
            <Project title="Project 3" img={project3} link="https://www.investors.playtech.com/"/>
            </div>
            <div className='col-span-12'>
            <FeaturedProject title="Project 4" img={project4} summary="Developed a dynamic React web application that fetches and displays Pokémon data using the Pokémon API. Integrated Axios for efficient API calls" link="https://pokemonhub-react.netlify.app/"/>
            </div>
            <div className='col-span-6 md:col-span-12'>
            <Project title="Project 5" img={project5} link="https://form-validation-react-1.netlify.app/"/>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
