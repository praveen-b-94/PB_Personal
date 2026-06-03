import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Praveen Bachoti. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/contact" className="hover:text-neutral-700 transition-colors">Contact</Link>
          <Link to="/resume" className="hover:text-neutral-700 transition-colors">Resume</Link>
          <a
            href="https://www.linkedin.com/in/praveenbachoti"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
