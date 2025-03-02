import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React, { useState } from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b72e7690-6143-4490-9731-8309ea74bac0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Head>
        <title>My Portfolio | Contact Page</title>
        <meta name='description' content='My Portfolio website contact page' />
      </Head>
      <TransitionEffect />
      <main>
        <Layout>
          <AnimatedText text="Collaborate to create success!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className='flex justify-around sm:flex-col sm:items-center'>
            <p className='text-primary font-semibold underline'><a href='mailto:yash.vanjani16@gmail.com'>yash.vanjani16@gmail.com</a></p>
            <p className='text-primary font-semibold underline'><a href='tel:9106737712'>+91 9106737712</a></p>
          </div>
          <div className='mt-16 md:mt-4 w-full rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4'>
            <p className='text-center text-5xl font-semi-bold'>Get in touch</p>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-primary'>I&apos;d love to hear from you! If you have any questions,comments, or feedback,please use the form below.</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type="text" placeholder="Enter your name" required className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md' name='name' />
                <input type="email" placeholder="Enter your email" required className='p-3 outline-none border-[0.5px] border-gray-400 rounded-md' name='email' />
              </div>
              <textarea rows='6' placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6' name='message'></textarea>
              <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-dark/80 text-light rounded-full mx-auto hover:bg-dark duration-500'>Submit now</button>

              <p className='mt-4'>{result}</p>
            </form>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Contact
