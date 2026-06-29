export async function  generateSchema(job){ // dynamic schema generator
 if(!job){
    return null
 }
 return {
    "@context":"https://schema.org",
    "@type": "JobPosting",
    "title": job.title ? job.title : "", // job title
    "description" :job.description ? job.description : "" , //description of the job
    "datePosted": job.datePosted ? job.datePosted  : "", // posting date
    "validThrough" : job.validThrough ?job.validThrough:"", // will closed at 
    "employmentType": job.employmentType ? job.employmentType:"", // type of employment
    "hiringOrganization": {
        "@type":"Organization",
        "name": job.company ? job.company :"" , // organization name
        "logo" :job.companyLogo ? job.companyLogo :"", // organization logo
        "sameAs" :job.website ?job.website :"" // website
    },
    "jobLocation":{
        "@type":"Place",
        "address" : {
            "@type": "PostalAddress",
            "addressLocality": job.location?job.location:"" // location of the job
        }
    },
    "baseSalary": (job.salary&&job.salary.value)?{
        "@type":"MonetaryAmount",
        "currency": job.salary.currency ? job.salary.currency :"", // currency of the job
        "value" : {
            "@type":"QuantitativeValue",
            "value": job.salary.value, // value of the salary
             "unitText":"MONTH" // that means that this value will be for this period
    }}:undefined
 }
}