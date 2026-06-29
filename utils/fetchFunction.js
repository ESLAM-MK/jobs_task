 // i made general function to make it usable for get all jobs and get sepecific job
 const  fetchFun = async(slug)=>{ // dynamic data fetching function 
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const fetchLink = (!slug) ? `${baseUrl}/jobs` : `${baseUrl}/jobs?slug=${slug}`
        const res = await fetch(fetchLink) // filteration by slug
        if (!res.ok) return null // if response of fetching not ok it will return null
        const data = await res.json() // else get data 
        if (data.length === 0) return null
        return slug ? data[0] : data // this will return specific job depends on slug
    } catch (error) {
        console.error("Data fetching failed:", error.message);
        return null;    }
}
export default fetchFun
