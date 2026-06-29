import JobCard from "@/components/JobCard.js";
import fetchFun from "@/utils/fetchFunction.js";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = { // i make it static because it's not dynamic routing 
  title: "Jobs",
  description: "Browse all available jobs",
};
export default async function getAllJobs() {
  const jobs = await fetchFun()
  // console.log(jobs)
  if (!jobs) {
    return (
      <div className="mx-1.5 flex justify-center">
        <h2>no available jobs right Know</h2>
        <p>try later</p>
      </div>
    )
  }
  return (
    <>
      <section className="min-h-screen  bg-gray-100 px-6 py-12 md:px-12 lg:px-24">
        <div className="flex justify-between my-3">
          <div><h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-600 tracking-tight leading-tight animate-bounce">Featured Jobs</h1></div>
          <div>
            <Link href={'/'} className="hover:cursor-pointer w-auto  bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-4 rounded-2xl shadow-md hover:shadow-lg transition-all whitespace-nowrap" >
            <ArrowLeft className='inline' />   Back
          </Link>
          </div>
        </div>
        <div className="grid p-6 lg:p-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-3  bg-gray-100">
          {
            jobs.map(job => <JobCard key={job.id} slug={job.slug} title={job.title} companyName={job.company} location={job.location}
              companyLogo={job.companyLogo} employmentType={job.employmentType} experience={job.experience} salary={job.salary}
              datePosted={job.datePosted} description={job.description} />)
          }
        </div>
      </section>
    </>
  )
}