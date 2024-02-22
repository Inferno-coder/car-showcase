import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Custombutton } from './Custombutton'

export const Navbar = () => {
  return (
    <div>
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-16 md:px-6 py-1 my-2 rounded-3xl'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg"
                    alt=""
                    width={118}
                    height={18}
                    className='object-contain'
                    />
                </Link>
                <Custombutton 
                title="Sign in"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px] p-4'
                />
            </nav>
        </header>
    </div>
  )
}
