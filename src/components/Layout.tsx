import { lazy, Suspense, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import brandImage from '../assets/IMG_0081.JPG'
import { SiteFooter } from './SiteFooter'

const SceneBackground = lazy(() =>
  import('./SceneBackground').then((module) => ({
    default: module.SceneBackground,
  })),
)

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Me' },
]

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export function Layout() {
  return (
    <div className="site-shell">
      <Suspense fallback={<div className="scene-background scene-background--fallback" />}>
        <SceneBackground />
      </Suspense>
      <ScrollToTop />
      <header className="site-header">
        <NavLink to="/" className="brand">
          <img src={brandImage} alt="Yuta Kanehara" className="brand__image" />
        </NavLink>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page-shell">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
