import Link from 'next/link';
import { Briefcase } from 'lucide-react';
export const metadata = { // i make it static because it's not dynamic routing 
  title: "Not Found",
};
export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <div className="max-w-md w-full flex flex-col items-center space-y-6">
        <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest animate-bounce">
          404
        </h1>
        <div className="bg-indigo-50 px-3 py-1 rounded text-sm font-medium text-indigo-700 select-none animate-bounce">
          Page Not Found
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-950">
          Lost in Space?
        </h2>
        <p className="text-slate-600 font-medium leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track to finding your dream job!
        </p>
        <Link href={"/jobs"} className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto justify-center group" >
             <Briefcase className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Explore Open Jobs</span>
        </Link>
      </div>
    </section>
  );
}