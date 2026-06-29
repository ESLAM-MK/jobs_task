import { Briefcase, MapPin, Pencil } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const JobCard = ({ title, slug, companyName, location, companyLogo, employmentType, experience, salary, datePosted, description }) => {
    return (
        <>
            <Link href={`/jobs/${slug}`} className="block group">
                <div className="bg-white border border-blue-200 hover:border-blue-500/50 rounded-2xl p-5 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col justify-between h-full min-h-[320px]">
                    <div className="flex justify-between items-start gap-4">
                        <div className="  shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <Image src={companyLogo} alt={title} width={48} height={48} className="shadow-gray-400 shadow-sm rounded-full object-cover aspect-square min-w-[48px] min-h-[48px]" />                    </div>
                        <span className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 backdrop-blur-sm self-center">
                            {employmentType}
                        </span>
                    </div>
                    <div className="mt-4 space-y-1">
                        <span className="text-xs  text-blue-600 font-bold block group-hover:text-blue-400 transition-colors duration-300">
                            {companyName}
                        </span>
                        <h3 className="text-lg font-bold text-gray-500 line-clamp-1 group-hover:text-gray-800 transition-colors duration-300">
                            {title}
                        </h3>
                    </div>
                    <p className="text-sm text-slate-400 my-3 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-wrap justify-between gap-2 py-3 border-t  border-blue-600 text-xs font-medium text-blue-600">
                        <span className=" px-2.5 py-1 bg-blue-100  border border-blue-600">
                            <Briefcase size={16} color='black' className='inline'/> {experience}
                        </span>
                        <span className="bg-blue-100 px-2.5 py-1  border border-slate-700/30">
                            <MapPin size={16} color='black' className='inline' /> {location}
                        </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-slate-800/80">
                        <div className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                            {salary?.value} <span className="text-xs font-bold text-emerald-500 ">{salary?.currency}</span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">
                           <span> <Pencil size={16} className='inline' /> </span>{datePosted}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default JobCard;
