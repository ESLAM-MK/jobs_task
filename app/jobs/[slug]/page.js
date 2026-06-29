import fetchFun from "@/utils/fetchFunction.js";
import { generateSchema } from "@/utils/generateJsonLd.js";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from 'next/link';
import jobsData from "../../../data/jobs.json"
import { MapPin, Briefcase, Calendar, DollarSign, ArrowLeft, Building2 } from 'lucide-react';
export const dynamic = 'force-dynamic';
export async function generateStaticParams(){
    const allJobs = await fetchFun() // fetch all jobs
    if(!allJobs) return [] // if no jobs return empty array
    return allJobs.map(job=>({
        slug:job.slug
    }))
}
export async function generateMetadata({params}) { // generate dynamic meta data as required in (bonus section)
    const {slug} =await params
    const job= await fetchFun(slug)
    if(!job){
        return {title :"job not found"}
    }
    return {
        title : `${job.title} | ${job.company}`,
        description:`${job.description}`
    }
}
export default async function jobDetails({params}){
    const {slug} = await params 
    let job = await fetchFun(slug)
    if(!job) {
        job = jobsData.jobs.find(j => j.slug === slug || j.id === slug);
    }
    if(!job) { notFound()} // here i handled invalid routes using notFound as you want in (Bonus section)
    const schemaOfJob = generateSchema(job)
    return(
        <>
        {/* {console.log(job)} */}
        {schemaOfJob && (<script type="application/ld+json" dangerouslySetInnerHTML={{__html :JSON.stringify(schemaOfJob)}}/>) } 
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col space-y-6">
        <Link  href="/jobs"  className="inline-flex items-center space-x-2 text-sm  text-indigo-600 font-bold transition-colors w-fit"  >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Jobs</span>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">    
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative shadow shadow-gray-400 rounded-2xl flex items-center justify-center  border border-slate-200 overflow-hidden shrink-0">
                  <Image   width={90}  height={90}   src={job.companyLogo}   alt={job.title}   className="object-contain"/>
                </div>
                <div className="flex flex-col space-y-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    {job.title}
                  </h1>
                  <div className="flex items-center space-x-1.5 text-slate-600 font-medium">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{job.company}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Job Description
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                {job.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Job Overview
              </h2>
              <div className="flex flex-col lg:flex-col sm:flex-row space-y-4">
                <div className="flex items-start space-x-3 mr-1">
                  <MapPin className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Location</span>
                    <span className="text-sm font-semibold text-slate-800">{job.location}</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3  mr-1">
                  <Briefcase className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Job Type</span>
                    <span className="text-sm font-semibold text-slate-800">{job.employmentType}</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mr-1">
                  <Briefcase className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Experience</span>
                    <span className="text-sm font-semibold text-slate-800">{job.experience}</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 mr-1">
                  <DollarSign className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Salary</span>
                    <span className="text-sm font-semibold text-slate-800">
                      {job.salary.value} <span className="text-xs text-slate-500 font-medium">{job.salary.currency} / Month</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 ">
                  <Calendar className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Date Posted</span>
                    <span className="text-sm font-semibold text-slate-800">{job.datePosted}</span>
                  </div>
                </div>
              </div>
              <button className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}