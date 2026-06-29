"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ArrowRight } from 'lucide-react';
const HomeComponent = () => {
    gsap.registerPlugin(TextPlugin)
const containerRef = useRef(null)
const text2Ref =useRef(null)
const imageRef =useRef(null)
  const text = "Build a Career You Deserve."
  const text2 = "Your gateway to elite career opportunities. Every single job posting is rigorously vetted by our team to guarantee authentic, high-impact roles  from top-tier global innovators."
   const splitWords = text2.split(" ").map((word, wordIndex) => {
  return (
    <span key={wordIndex} className="inline-block whitespace-nowrap mr-2">
      {word.split("").map((char, charIndex) => (
        <span key={charIndex} className="char inline-block">
          {char}
        </span>
      ))}
    </span>
  )
})
  useGSAP( () => { gsap.from(".char", {opacity: 0,y: 50
    ,rotateX: 90,
    duration: 0.2,
     stagger: 0.03, 
      ease: "power4.out",
    })},
    { scope: text2Ref } )
    useGSAP(() => {
    gsap.to(containerRef.current, {
      duration: 1, 
      text: text, 
      ease: "none", 
    })
  })
  useGSAP(()=>{
    gsap.to(imageRef.current,{
        y:-20,
        repeat:-1,
        ease:"power1.inOut",
        yoyo: true,
        duration:2
    })
  })
    const router = useRouter()
    return (
       <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 max-w-xl">
          <h1  ref={containerRef} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-600 tracking-tight leading-tight">
          </h1>
          <p  ref={text2Ref} className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">  {splitWords}  </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2 ">
            <button className="hover:cursor-pointer w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all whitespace-nowrap" onClick={()=>router.push('/jobs')}>
              Browse Jobs <ArrowRight className='inline' />
            </button>
          </div>
        </div>
        <div ref={imageRef} className="relative w-full aspect-[4/3] max-w-2xl justify-self-center lg:justify-self-end">
          <Image  src="/images/home.jpg"  alt="Job Platform Illustration" fill priority sizes="(max-w-768px) 100vw, 50vw" className="object-contain"/>
        </div>

      </div>
    </section>
        )
}

export default HomeComponent;
