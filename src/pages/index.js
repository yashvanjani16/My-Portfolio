import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio Website</title>
        <meta name="description" content="My Portfolio website home page" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='portfolio-image' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
              priority
              sizes='(max-width:768px) 100vw,
  (max-width:1200px) 50vw,50vw'
              />

            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Building bridges between ideas and execution." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl
              ' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a skilled front-end developer, I am passionate about turning pixel-perfect designs into flawless, clean and bug-free code that enhances user engagement.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link title="Download Resume" href="/yashcv.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
                  download={true}
                >Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link href="/contact" aria-label='Naviagte to Contact'
                className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
