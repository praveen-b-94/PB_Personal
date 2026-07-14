export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="section-heading mb-1">Resume</h1>
          <p className="text-neutral-500 text-sm">Last updated July 2026</p>
        </div>
        <a
          href="/embed/Praveen_Bachoti_Resume_QE.pdf"
          download
          className="btn-primary self-start sm:self-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* PDF embed */}
      <div className="card overflow-hidden" style={{ height: '85vh' }}>
        <iframe
          src="/embed/Praveen_Bachoti_Resume_QE.pdf"
          className="w-full h-full"
          title="Praveen Bachoti Resume"
        />
      </div>

      <p className="text-neutral-400 text-xs text-center mt-4">
        If the PDF doesn't load,{' '}
        <a
          href="/embed/Praveen_Bachoti_Resume_QE.pdf"
          className="text-orange-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          open it directly ↗
        </a>
      </p>
    </div>
  )
}
