import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'

const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage').then((module) => ({
    default: module.ProjectsPage,
  })),
)
const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((module) => ({
    default: module.ProjectDetailPage,
  })),
)
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })),
)

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
