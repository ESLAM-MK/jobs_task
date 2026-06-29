import JobCard from "@/components/JobCard.js";
import fetchFun from "@/utils/fetchFunction.js";

export const metadata = { // i make it static because it's not dynamic routing 
  title: "Jobs",
  description: "Browse all available jobs",
};
export default async function getAllJobs() {
    const jobs = await fetchFun()
    console.log(jobs)
    if(!jobs){return (
      <div className="mx-1.5 flex justify-center">
        <h2>no available jobs right Know</h2>
        <p>try later</p>
      </div>
    )}
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 sm:p-10 md:p-16 lg:p-20 gap-6"> 
        {
            jobs.map(job=><JobCard key={job.id}slug={job.slug} title={job.title} companyName ={job.company} location={job.location}
            companyLogo ={job.companyLogo} employmentType={job.employmentType} experience={job.experience} salary ={job.salary}
            datePosted={job.datePosted} description={job.description}/>)
        }
        </div>
        </>
    )
}