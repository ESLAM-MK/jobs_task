 // i made general function to make it usable for get all jobs and get sepecific job
const  fetchFun = async(slug)=>{ // dynamic data fetching function 
    try {
        const fetchLink = (!slug) ? `http://localhost:3000/jobs` : `http://localhost:3000/jobs?slug=${slug}`
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
