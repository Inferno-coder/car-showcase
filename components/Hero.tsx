"use client"
import React from 'react'
import { Custombutton } from './Custombutton'
import Image from 'next/image'
export const Hero = () => {
    const handleScroll=()=>{

    }
  return (
    <div className="hero">
        <div className="flex-1 md:pt-28 pt-20 padding-x">
            <h4 className="hero__title">
                Find,Book or Rent a Car -- Quickly and Easily
            </h4>
            <p className='hero__subtitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolor.
            </p>
            <Custombutton 
            title="explore cars" 
            containerStyles="bg-primary-blue text-white rounded-full p-2 md:mt-10"
            handleClick={()=>{handleScroll}}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image ">
                <Image src="/hero.png" alt="" className='object-contain' fill />
            </div>
            <div className="hero__image-overlay"></div>
        </div>
    </div>
  )
}
