"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'
export const Custombutton = ({title,containerStyles,handleClick,textStyles,rightIcon,isDisabled}:CustomButtonProps)=> {
  return (
    <button disabled={false} type={'button'} className='custom-btn' onClick={()=>{}}>
        <span className={`flex-1 ${containerStyles} ${textStyles}`}>{title}</span>
    </button>
  )
}
