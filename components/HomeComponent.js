"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
const HomeComponent = () => {
    const router = useRouter()
    return (
        <div>
           <button className='text-amber-300' onClick={()=>router.push('/jobs')}>
                        Browse Jobs
                    </button> 
        </div>
    );
}

export default HomeComponent;
