import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Artwork from './pages/Artwork'
import Music from './pages/Music'
import Novels from './pages/Novels'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

const PAGE_TITLES = {
  '/artwork': 'Artwork',
  '/music': 'Music',
  '/novels': 'Novels',
  '/resume': 'Resume',
  '/contact': 'Contact',
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = PAGE_TITLES[pathname]
    document.title = page ? `${page} | Praveen Bachoti` : 'Praveen Bachoti'
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/music" element={<Music />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
