import JobCard from "@/components/jobCard";
import fetchFun from "@/utils/fetchFunction.js";
import Image from "next/image";
import { notFound } from "next/navigation";

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
    const job = await fetchFun(slug)
    if(!job) { notFound()} // here i handled invalid routes using notFound as you want in (Bonus section)
    return(
        <>
        <div>
            <h2>{job.title}</h2>
            <h2>{job.company}</h2>
            <h2>{job.location}</h2>
            <Image  width='50' height="50" src={job.companyLogo} alt={job.title} /> // as required in (Bonus section)
            <h2>{job.employmentType}</h2>
            <h2>{job.experience}</h2>
            <h2>{job.salary.value}<span>{job.salary.currency}</span></h2>
            <h2>{job.datePosted}</h2> 
            <h2>{job.description}</h2>           
        </div>
        </>
    )
}