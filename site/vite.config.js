import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import fs from 'fs'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

function getMime(file) {
  const ext = path.extname(file).toLowerCase()
  return (
    { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
      '.gif': 'image/gif', '.mp4': 'video/mp4', '.pdf': 'application/pdf',
      '.svg': 'image/svg+xml', '.webp': 'image/webp' }[ext] ?? 'application/octet-stream'
  )
}

// Serve /media and /embed directly from the repo root, in both the dev
// server and `vite preview` (used by the automated test suite).
function repoAssetMiddleware(req, res, next) {
  const url = req.url?.split('?')[0]
  if (url?.startsWith('/media/') || url?.startsWith('/embed/')) {
    const filePath = resolve(repoRoot, url.slice(1))
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.setHeader('Content-Type', getMime(filePath))
      fs.createReadStream(filePath).pipe(res)
      return
    }
  }
  next()
}

const serveRepoAssets = {
  name: 'serve-repo-assets',
  configureServer(server) {
    server.middlewares.use(repoAssetMiddleware)
  },
  configurePreviewServer(server) {
    server.middlewares.use(repoAssetMiddleware)
  },
}

export default defineConfig({
  plugins: [react(), serveRepoAssets],
  server: {
    fs: { allow: ['..'] },
  },
})
