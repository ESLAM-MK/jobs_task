 // i made general function to make it usable for get all jobs and get sepecific job
 const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const  fetchFun = async(slug)=>{ // dynamic data fetching function 
    try {
        const fetchLink = (!slug) ? `${baseUrl}/jobs` : `${baseUrl}/jobs?slug=${slug}`
        const res = await fetch(fetchLink) // filteration by slug
        if (!res.ok) return null // if response of fetching not ok it will return null
        const data = await res.json() // else get data 
        if (data.length === 0) return null
        return slug ? data[0] : data // this will return specific job depends on slug
    } catch (error) {
        throw new Error(error.message)
    }
}
export default fetchFun
