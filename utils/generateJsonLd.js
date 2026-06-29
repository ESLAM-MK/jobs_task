export async function generateSchema(job) {
  if (!job) return null;
  const empType = job.employmentType 
    ? job.employmentType.toUpperCase().replace("-", "_").replace(" ", "_") : "FULL_TIME";
  const countryCode = job.location && job.location.toLowerCase().includes("uae") ? "AE" : "EG";

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title || "",
    "description": job.description || "",
    "datePosted": job.datePosted || "",
    "validThrough": job.validThrough || "",
    "employmentType": empType, 
    
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company || "",
      "logo": job.companyLogo ? `https://jobtask.vercel.app${job.companyLogo}` : "",
      "sameAs": job.website || ""
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location || "",
        "addressCountry": countryCode 
      }
    },
    "baseSalary": (job.salary && job.salary.value) ? {
      "@type": "MonetaryAmount",
      "currency": job.salary.currency || "EGP",
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary.value,
        "unitText": "MONTH"
      }
    } : undefined
  };
}