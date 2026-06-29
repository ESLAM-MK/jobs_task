import { NextResponse } from 'next/server';
import jobsData from '../../../data/jobs.json'; 

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    const allJobs = jobsData.jobs
    if (slug) {
        const singleJob = allJobs.filter(job => job.slug === slug || job.id === slug)
        return NextResponse.json(singleJob)
    }
    return NextResponse.json(allJobs)
}