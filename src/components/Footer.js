import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Built With <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp;YashVanjani
                </div>
                
            </Layout>
        </footer>
    )
}

export default Footer
