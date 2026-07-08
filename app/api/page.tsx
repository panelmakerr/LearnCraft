'use client';
import Link from 'next/link';

export default function APIDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A2A2A] to-[#3A3A3A] text-[#E8E0D8] p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#C47A4E] hover:underline text-sm mb-8 inline-block">← Back to Home</Link>
        <h1 className="font-serif text-4xl mb-8">learncraft API</h1>
        <p className="text-[#8A8278] mb-12">RESTful API endpoints for Education Reimagined. All endpoints return JSON.</p>
        <div className="space-y-8">
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/courses</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/courses → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/courses → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/courses/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/courses/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/students</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/students → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/students → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/students/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/students/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/lessons</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/lessons → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/lessons → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/lessons/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/lessons/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/assessments</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/assessments → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/assessments → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/assessments/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/assessments/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/progress</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/progress → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/progress → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/progress/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/progress/[id] → Delete</span></div>
            </div>
          </div>

        </div>
        <footer className="mt-16 pt-8 border-t border-white/[0.04] text-center text-sm text-[#8A8278]">
          <p>Built by <span style={{color:'#E8A838'}}>Raymora</span> — Premium Web Engineering</p>
        </footer>
      </div>
    </div>
  );
}
